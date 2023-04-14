import React from 'react';
import {createContext} from '@dwarvesf/react-utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAsyncEffect} from '@dwarvesf/react-hooks';
import {mutate} from 'swr';

import {services} from '@api';
import {AUTH_TOKEN_KEY, AUTH_REFRESH_TOKEN_KEY} from '@constants';
import {API_REQUEST, emitter} from '@services';

interface AuthContextValues {
  isLogin: boolean;
  isLoading?: boolean;
  logout?: () => void;
}

const [Provider, useAuthContext] = createContext<AuthContextValues>({
  name: 'auth',
});

const AuthContextProvider = ({children}: React.PropsWithChildren) => {
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const [isLoading] = React.useState(false);

  const logout = React.useCallback(() => {
    services.clearAuthToken();
    AsyncStorage.removeItem(AUTH_TOKEN_KEY);
    AsyncStorage.removeItem(AUTH_REFRESH_TOKEN_KEY);
    setIsLogin(false);
    mutate(() => true, undefined, false); // invalidate all cache from swr
  }, []);

  React.useEffect(() => {
    const handleApiEvent = (event: any) => {
      if (event?.status === 401 || event?.status === 403) {
        logout();
      }
    };
    emitter.on(API_REQUEST, handleApiEvent);
    return () => {
      emitter.off(API_REQUEST, handleApiEvent);
    };
  }, [logout]);

  useAsyncEffect(async () => {
    const accessToken = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
    if (accessToken) {
      services.setAuthToken(accessToken);
      setIsLogin(true);
    }
  }, []);

  return (
    <Provider
      value={{
        isLogin,
        isLoading,
        logout,
      }}>
      {children}
    </Provider>
  );
};

export {useAuthContext, AuthContextProvider, Provider};

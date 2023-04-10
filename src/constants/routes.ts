import {createNavigationContainerRef} from '@react-navigation/native';

export enum ROUTES {
  Home = 'Home',
  Login = 'Login',
  Profile = 'Profile',
  SignUp = 'SignUp',
  Splash = 'Splash',
}

type LoginParams = {
  user: ROUTES;
  password?: string;
};

export type MainStackNavigatorParamList = {
  Home: undefined;
  Login: LoginParams;
  Profile: undefined;
  SignUp: undefined;
  Splash: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackNavigatorParamList {}
  }
}

export const navigationRef =
  createNavigationContainerRef<MainStackNavigatorParamList>();

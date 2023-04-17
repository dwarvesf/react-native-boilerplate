import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

import {MainStackNavigatorParamList, navigationRef, ROUTES} from '@constants';
import {AuthContextProvider} from '@contexts';
import {DropDownHolder} from '@core';

import {HomeScreen} from '../screens/home';
import {QuoteListScreen} from '../screens/quoteList';
import {LoginScreen} from '../screens/login';
import {ProfileScreen} from '../screens/profile';
import {SignUpScreen} from '../screens/signUp';
import {QuoteScreen} from '../screens/quote';
import {DashboardScreen} from '../screens/dashboard';

const MainStack = createStackNavigator<MainStackNavigatorParamList>();

export const AppContainer = React.memo(() => {
  return (
    <AuthContextProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>
        <MainStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={ROUTES.Login}>
          <MainStack.Screen name={ROUTES.Home} component={HomeScreen} />
          <MainStack.Screen name={ROUTES.Login} component={LoginScreen} />
          <MainStack.Screen name={ROUTES.Profile} component={ProfileScreen} />
          <MainStack.Screen name={ROUTES.SignUp} component={SignUpScreen} />
          <MainStack.Screen name={ROUTES.Quote} component={QuoteScreen} />
          <MainStack.Screen
            name={ROUTES.QuoteList}
            component={QuoteListScreen}
          />
          <MainStack.Screen
            name={ROUTES.Dashboard}
            component={DashboardScreen}
          />
        </MainStack.Navigator>
      </NavigationContainer>
      <DropdownAlert
        updateStatusBar={false}
        useNativeDriver
        tapToCloseEnabled={false}
        zIndex={99}
        defaultContainer={{
          padding: 8,
          paddingTop: StatusBar.currentHeight,
          flexDirection: 'row',
        }}
        ref={ref => DropDownHolder?.setDropDown(ref)}
        onClose={() => DropDownHolder?.invokeOnClose()}
      />
    </AuthContextProvider>
  );
});

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
import DropdownAlert from 'react-native-dropdownalert';

// import {
//   useFonts,
//   Inter_400Regular,
//   Inter_500Medium,
//   Inter_600SemiBold,
//   Inter_700Bold,
// } from '@expo-google-fonts/inter';

import {MainStackNavigatorParamList, navigationRef, ROUTES} from '../constants';
// import {Style, Palette} from '../styles';
import {HomeScreen} from '../screens/home';
import {QuoteListScreen} from '../screens/home/quoteList';

import {LoginScreen} from '../screens/login';
import {ProfileScreen} from '../screens/profile';
import {SignUpScreen} from '../screens/signUp';
import {AuthContextProvider} from '../contexts/auth';
import {DropDownHolder} from '../core';

const MainStack = createStackNavigator<MainStackNavigatorParamList>();

export const AppContainer = React.memo(() => {
  // const [fontsLoaded] = useFonts({
  //   Inter_400Regular,
  //   Inter_500Medium,
  //   Inter_600SemiBold,
  //   Inter_700Bold,
  // });

  // if (!fontsLoaded) {
  //   return (
  //     <SafeAreaView style={Style.s({flex: 1, cen: true})}>
  //       <ActivityIndicator size="large" color={Palette.primary} />
  //     </SafeAreaView>
  //   );
  // }

  return (
    <AuthContextProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>
        <MainStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={ROUTES.Home}>
          <MainStack.Screen name={ROUTES.Home} component={HomeScreen} />
          <MainStack.Screen name={ROUTES.Login} component={LoginScreen} />
          <MainStack.Screen name={ROUTES.Profile} component={ProfileScreen} />
          <MainStack.Screen name={ROUTES.SignUp} component={SignUpScreen} />
          <MainStack.Screen
            name={ROUTES.QuoteList}
            component={QuoteListScreen}
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

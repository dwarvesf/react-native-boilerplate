import { createNavigationContainerRef } from '@react-navigation/native'

export enum ROUTES {
  Home = 'Home',
  Login = 'Login',
}

type LoginParams = {
  user: ROUTES
  password?: string
}

export type MainStackNavigatorParamList = {
  Home: undefined
  Login: LoginParams
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackNavigatorParamList {}
  }
}

export const navigationRef =
  createNavigationContainerRef<MainStackNavigatorParamList>()

import { useRoute } from '@react-navigation/native'

export const useNavigatorParams = <T = any>() => {
  const route = useRoute()
  return (route?.params as T) ?? ({} as any)
}

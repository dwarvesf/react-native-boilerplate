import React from 'react'
import { Text, View } from 'react-native'
import { responsiveHeight } from '@utils'
import { MainLayout, Button } from '@components'
import { Style, Fonts, Palette } from '@styles'
import { useNavigator } from '@hooks'
import { ROUTES } from '@constants'

export const HomeScreen = React.memo(() => {
  const nav = useNavigator()

  return (
    <MainLayout header canBack scrollable paddingX={20}>
      <View
        style={Style.s({
          items: 'center',
          justify: 'center',
          mt: responsiveHeight(2),
          h: responsiveHeight(80),
        })}
      >
        <Text
          style={Fonts.t({
            s: 27,
            w: '700',
            c: Palette.gray[400],
            text: 'center',
          })}
        >
          {'Welcome to\nDwarves React Native Boilerplate!'}
        </Text>
      </View>
      <View>
        <Button
          title="Login"
          secondary
          onPress={() => nav.navigate(ROUTES.Login)}
        />
      </View>
    </MainLayout>
  )
})

import React from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import FastImage from 'react-native-fast-image'
import { MainLayout, Input, Checkbox, Button } from '@components'
import { Style, Fonts, Palette } from '@styles'
import { images } from '@assets'
import { responsiveHeight } from '@utils'
import { useNavigator } from '@hooks'
import { ROUTES } from '@constants'

export const LoginScreen = React.memo(() => {
  const nav = useNavigator()
  const { t } = useTranslation()

  const onSignIn = React.useCallback(() => {
    // TODO: handle sign in
    nav.navigate(ROUTES.Home)
  }, [nav])

  return (
    <MainLayout header canBack scrollable>
      <View style={Style.s({ h: responsiveHeight(10) })} />
      <View style={Style.s({ items: 'center', mt: responsiveHeight(2) })}>
        <FastImage
          style={Style.s({ size: 60, bor: 12 })}
          source={images.logo}
        />
        <View style={Style.s({ h: responsiveHeight(2) })} />
        <Text style={Fonts.t({ s: 27, w: '700', c: Palette.gray[400] })}>
          {t('sign_in')}
        </Text>
        <View style={Style.s({ h: 5 })} />
      </View>
      <View style={Style.s({ h: responsiveHeight(4) })} />
      <View>
        <Text style={Fonts.t({ s: 14, w: '500', c: Palette.gray[300] })}>
          {t('email')}
        </Text>
        <View style={Style.s({ h: 6 })} />
        <Input placeholder={t('email')} />
      </View>
      <View style={Style.s({ h: responsiveHeight(3) })} />
      <View>
        <Text style={Fonts.t({ s: 14, w: '500', c: Palette.gray[300] })}>
          {t('password')}
        </Text>
        <View style={Style.s({ h: 6 })} />
        <Input secureTextEntry={true} placeholder={t('password')} />
      </View>
      <View style={Style.s({ h: responsiveHeight(3) })} />
      <View
        style={Style.s({
          direc: 'row',
          items: 'center',
          justify: 'space-between',
        })}
      >
        <View style={Style.s({ direc: 'row', items: 'center' })}>
          <Checkbox text={t('remember_me')} />
        </View>
        <Text style={Fonts.t({ s: 14, w: '500', c: Palette.primary })}>
          {t('forgot_password')}
        </Text>
      </View>
      <View style={Style.s({ h: responsiveHeight(3) })} />
      <View>
        <Button title={t('sign_in')} primary onPress={onSignIn} />
      </View>
    </MainLayout>
  )
})

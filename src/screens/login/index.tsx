import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {MainLayout, Input, Checkbox, Button} from '@components';
import {Style, Fonts, Palette} from '@styles';
import {images} from '@assets';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigator} from '@hooks';
import {ROUTES} from '@constants';

export const LoginScreen = React.memo(() => {
  const nav = useNavigator();

  const onSignIn = React.useCallback(() => {
    nav.navigate(ROUTES.Dashboard);
  }, [nav]);
  const onUseDemoAccount = React.useCallback(() => {
    nav.navigate(ROUTES.Dashboard);
  }, [nav]);

  return (
    <MainLayout header canBack scrollable>
      <View style={Style.s({h: responsiveHeight(10)})} />
      <View style={Style.s({items: 'center', mt: responsiveHeight(2)})}>
        <FastImage style={Style.s({size: 60, bor: 12})} source={images.logo} />
        <View style={Style.s({h: responsiveHeight(2)})} />
        <Text style={Fonts.t({s: 27, w: '700', c: Palette.gray[400]})}>
          {'Sign in to your account'}
        </Text>
        <View style={Style.s({h: 5})} />
        <Text style={Fonts.t({s: 14, w: '500', c: Palette.gray[100]})}>
          {'Or '}
          <Text style={Fonts.t({s: 14, w: '500', c: Palette.primary})}>
            {'start your 14-day free trial'}
          </Text>
        </Text>
      </View>
      <View style={Style.s({h: responsiveHeight(4)})} />
      <View>
        <Text style={Fonts.t({s: 14, w: '500', c: Palette.gray[300]})}>
          {'Email'}
        </Text>
        <View style={Style.s({h: 6})} />
        <Input placeholder="Email" />
      </View>
      <View style={Style.s({h: responsiveHeight(3)})} />
      <View>
        <Text style={Fonts.t({s: 14, w: '500', c: Palette.gray[300]})}>
          {'Password'}
        </Text>
        <View style={Style.s({h: 6})} />
        <Input placeholder="Password" />
      </View>
      <View style={Style.s({h: responsiveHeight(3)})} />
      <View
        style={Style.s({
          direc: 'row',
          items: 'center',
          justify: 'space-between',
        })}>
        <View style={Style.s({direc: 'row', items: 'center'})}>
          <Checkbox />
          <View style={Style.s({w: responsiveWidth(2)})} />
          <Text style={Fonts.t({s: 14, w: '500', c: Palette.gray[300]})}>
            {'Remember me'}
          </Text>
        </View>
        <Text style={Fonts.t({s: 14, w: '500', c: Palette.primary})}>
          {'Forgot your password?'}
        </Text>
      </View>
      <View style={Style.s({h: responsiveHeight(3)})} />
      <View>
        <Button title="Sign in" primary onPress={onSignIn} />
        <View style={Style.s({h: responsiveHeight(3)})} />
        <View style={Style.s({direc: 'row', items: 'center'})}>
          <View style={Style.s({flex: 1, h: 1, bg: Palette.gray[200]})} />
          <Text
            style={Fonts.t({
              s: 14,
              w: '500',
              c: Palette.gray[100],
              x: responsiveWidth(3),
            })}>
            {'Or continue by'}
          </Text>
          <View style={Style.s({flex: 1, h: 1, bg: Palette.gray[200]})} />
        </View>
        <View style={Style.s({h: responsiveHeight(3)})} />
        <Button title="Use demo account" secondary onPress={onUseDemoAccount} />
      </View>
    </MainLayout>
  );
});

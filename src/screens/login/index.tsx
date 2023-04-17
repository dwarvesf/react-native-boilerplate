import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {MainLayout, Input} from '@components';
import {Style, Fonts, Palette} from '@styles';
import {images} from '@assets';
import {responsiveHeight} from 'react-native-responsive-dimensions';

export const LoginScreen = React.memo(() => (
  <MainLayout header canBack>
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
    <View style={Style.s({h: responsiveHeight(4)})} />
    <View>
      <Text style={Fonts.t({s: 14, w: '500', c: Palette.gray[300]})}>
        {'Password'}
      </Text>
      <View style={Style.s({h: 6})} />
      <Input placeholder="Password" />
    </View>
  </MainLayout>
));

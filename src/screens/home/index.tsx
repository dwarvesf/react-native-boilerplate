import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {MainLayout} from '@components';
import {Style} from '@styles';
import {useNavigator} from '@hooks';
import {ROUTES} from '@constants';

export const HomeScreen = React.memo(() => {
  const nav = useNavigator();

  const onExampleGetAPI = React.useCallback(() => {
    nav.navigate(ROUTES.Quote);
  }, [nav]);

  const onExampleGetDataPagination = React.useCallback(() => {
    nav.navigate(ROUTES.QuoteList);
  }, [nav]);

  const onExampleMapView = React.useCallback(() => {
    nav.navigate(ROUTES.QuoteList);
  }, [nav]);

  return (
    <MainLayout header canBack scrollable paddingX={0}>
      <TouchableOpacity
        onPress={onExampleGetAPI}
        style={Style.s({
          px: responsiveWidth(4),
          py: responsiveHeight(2),
          bg: 'lightblue',
        })}>
        <Text>{'Get API (get, loading, mutate)'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onExampleGetDataPagination}
        style={Style.s({
          px: responsiveWidth(4),
          py: responsiveHeight(2),
          bg: 'lightpink',
        })}>
        <Text>{'Infinity list (get data pagination)'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onExampleMapView}
        style={Style.s({
          px: responsiveWidth(4),
          py: responsiveHeight(2),
          bg: 'lightgreen',
        })}>
        <Text>{'Header animation'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onExampleMapView}
        style={Style.s({
          px: responsiveWidth(4),
          py: responsiveHeight(2),
          bg: 'honeydew',
        })}>
        <Text>{'Shared Element Transition '}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onExampleMapView}
        style={Style.s({
          px: responsiveWidth(4),
          py: responsiveHeight(2),
          bg: 'antiquewhite',
        })}>
        <Text>{'Utils (toast, alert, clipboard, modal, ...)'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => nav.navigate(ROUTES.Login)}
        style={Style.s({
          px: responsiveWidth(4),
          py: responsiveHeight(2),
          bg: 'antiquewhite',
        })}>
        <Text>{'Login'}</Text>
      </TouchableOpacity>
    </MainLayout>
  );
});

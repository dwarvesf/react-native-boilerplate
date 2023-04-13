import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {MainLayout} from '../../components';
import {Style} from '../../styles';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigator} from '../../hooks/useNavigator';
import {ROUTES} from '../../constants';

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
          bg: 'lightyellow',
        })}>
        <Text>{'Map view (marker, route, geo code)'}</Text>
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
          bg: 'azure',
        })}>
        <Text>{'Form validation'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onExampleMapView}
        style={Style.s({
          px: responsiveWidth(4),
          py: responsiveHeight(2),
          bg: 'blanchedalmond',
        })}>
        <Text>{'Carousel list'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onExampleMapView}
        style={Style.s({
          px: responsiveWidth(4),
          py: responsiveHeight(2),
          bg: 'deepskyblue',
        })}>
        <Text>{'Big list with images (Flash list)'}</Text>
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
          bg: 'khaki',
        })}>
        <Text>{'Notification with FCM'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onExampleMapView}
        style={Style.s({
          px: responsiveWidth(4),
          py: responsiveHeight(2),
          bg: 'lemonchiffon',
        })}>
        <Text>{'Code Push (AppCenter)'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onExampleMapView}
        style={Style.s({
          px: responsiveWidth(4),
          py: responsiveHeight(2),
          bg: 'lavender',
        })}>
        <Text>{'Custom Fonts'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onExampleMapView}
        style={Style.s({
          px: responsiveWidth(4),
          py: responsiveHeight(2),
          bg: 'aliceblue',
        })}>
        <Text>{'Native module'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onExampleMapView}
        style={Style.s({
          px: responsiveWidth(4),
          py: responsiveHeight(2),
          bg: 'aquamarine',
        })}>
        <Text>{'Background service'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onExampleMapView}
        style={Style.s({
          px: responsiveWidth(4),
          py: responsiveHeight(2),
          bg: 'cornsilk',
        })}>
        <Text>{'Three JS'}</Text>
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
    </MainLayout>
  );
});

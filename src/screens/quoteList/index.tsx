import React from 'react';
import {View, Text, ActivityIndicator, RefreshControl} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {responsiveHeight} from 'react-native-responsive-dimensions';

import {MainLayout} from '@components';
import {useFetchQuotes} from '@hooks';
import {Quote} from '@types';
import {Palette, Style} from '@styles';
import {keyExtractor} from '@utils';

export const PAGE_SIZE_DEFAULT = 10;

export const QuoteListScreen = React.memo(() => {
  const {
    data = [],
    isValidating,
    size,
    setSize,
    mutate,
  } = useFetchQuotes({title: 'naruto'});

  const listData = React.useMemo(() => {
    return data ? [].concat(...(data as any)) : [];
  }, [data]);

  const isEmpty = !data || data.length === 0;
  const isEnded =
    isEmpty ||
    !data[0] ||
    (data && data[data.length - 1]?.length < PAGE_SIZE_DEFAULT);

  const isRefreshing = size === 1 && isValidating;
  const isLoadMore = size > 1 && isValidating;

  const handleLoadMore = React.useCallback(() => {
    if (!isValidating && !isEnded) {
      setSize(preSize => preSize + 1);
    }
  }, [isEnded, isValidating, setSize]);

  const renderFooter = React.useCallback(
    () =>
      isLoadMore ? (
        <ActivityIndicator
          size="small"
          color={Palette.primary}
          style={Style.s({self: 'center', mt: responsiveHeight(2)})}
        />
      ) : (
        <View />
      ),
    [isLoadMore],
  );

  const renderItem = React.useCallback(
    ({item}: {item: Quote; index: number}) => {
      return (
        <View>
          <Text>{`Anime: ${item?.anime}`}</Text>
          <Text>{`Character: ${item?.character}`}</Text>
          <Text>{`Quote: ${item?.quote}`}</Text>
        </View>
      );
    },
    [],
  );

  const renderItemSeparator = React.useCallback(() => {
    return <View style={Style.s({h: responsiveHeight(2)})} />;
  }, []);

  return (
    <MainLayout header canBack>
      <FlashList
        data={listData}
        estimatedItemSize={200}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeparator}
        keyExtractor={keyExtractor}
        refreshControl={
          <RefreshControl
            colors={[Palette.primary, Palette.primary]}
            tintColor={Palette.primary}
            refreshing={isRefreshing}
            enabled
            onRefresh={mutate}
          />
        }
        onEndReached={handleLoadMore}
        ListFooterComponent={renderFooter}
      />
    </MainLayout>
  );
});

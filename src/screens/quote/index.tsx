import React from 'react';
import {ScrollView, Text, RefreshControl} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Palette, Style, gutters} from '../../styles';
import {useFetchQuoteRandom} from '../../hooks';

export const QuoteScreen = React.memo(() => {
  const {data, isLoading, mutate} = useFetchQuoteRandom();
  return (
    <SafeAreaView style={Style.s({flex: 1})}>
      <ScrollView
        refreshControl={
          <RefreshControl
            colors={[Palette.primary, Palette.primary]}
            tintColor={Palette.primary}
            refreshing={isLoading}
            onRefresh={mutate}
          />
        }
        contentContainerStyle={Style.s({p: gutters})}>
        <Text>{JSON.stringify(data)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
});

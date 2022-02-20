import React, { ReactElement } from 'react';
import { v4 } from 'uuid';
import { StyleSheet, View, FlatList } from 'react-native';

import { AssetCard } from './AssetCard';

import { theme } from '../../../constants/theme';

const styles = StyleSheet.create({
  separator: {
    height: 1,
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: theme.lightGray,
  },
  list: {
    paddingBottom: 16,
  },
});

export const AssetsList = ({ assets, onSelect }): ReactElement => {
  return (
    <View>
      <FlatList
        data={assets}
        renderItem={({ item }) => (
          <AssetCard asset={item} onSelect={onSelect} />
        )}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={() => v4()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

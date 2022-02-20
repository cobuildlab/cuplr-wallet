import React, { ReactElement } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { useMoralis } from 'react-moralis';

import { Blockie } from '../../../shared/components/blockie/Blockie';

import { theme } from '../../../constants/theme';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  symbol: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.black,
  },
  balance: {
    color: theme.gray,
    fontWeight: '600',
  },
  blockie: {
    width: 56,
    height: 56,
    marginRight: 16,
    borderRadius: 12,
  },
});

export const AssetCard = ({ asset, onSelect }): ReactElement => {
  const { Moralis } = useMoralis();
  return (
    <Pressable onPress={() => onSelect?.(asset)}>
      <View style={styles.item}>
        <Blockie seed={asset.token_address} style={styles.blockie} />
        <View>
          <Text style={styles.symbol}>{asset.name}</Text>
          <Text style={styles.balance}>
            {Moralis.Units.FromWei(asset.balance, asset.decimals).toFixed(3)}{' '}
            {asset.symbol}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

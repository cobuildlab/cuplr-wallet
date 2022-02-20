import React, { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { GradientCard } from '../../../shared/components/gradient-card/GradientCard';
import { shortenAddress } from '../../../utils/helpers';

import { useMoralisDapp } from '../../../providers/MoralisDappProvider/MoralisDappProvider';
import { useNativeBalance } from '../../../hooks';

import { theme } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  wallet: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 16,
    color: theme.gray,
  },
  balance: {
    color: theme.black,
    fontWeight: 'bold',
    fontSize: 32,
  },
});

export const WalletOverview = (): ReactElement => {
  const { chainId, walletAddress } = useMoralisDapp();
  const { nativeBalance } = useNativeBalance(chainId);

  return (
    <View style={styles.container}>
      <GradientCard startColor={theme.lightGray} endColor={theme.lightGray}>
        <Text style={styles.wallet}>{shortenAddress(walletAddress)}</Text>
        <Text style={styles.balance}>{nativeBalance}</Text>
      </GradientCard>
    </View>
  );
};

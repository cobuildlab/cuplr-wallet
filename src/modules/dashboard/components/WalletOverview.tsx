import React, { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { GradientCard } from '../../../shared/components/gradient-card/GradientCard';
import { shortenAddress } from '../../../utils/helpers';

import { useMoralisDapp } from '../../../providers/MoralisDappProvider/MoralisDappProvider';
import { useNativeBalance } from '../../../hooks';

import { theme } from '../../../constants/theme';
import { Blockie } from '../../../shared/components/blockie/Blockie';

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    alignItems: 'center',
  },
  blockie: {
    width: 56,
    height: 56,
    borderRadius: 12,
  },
  wallet: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 32,
    marginBottom: 32,
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
      <Blockie style={styles.blockie} seed={walletAddress} />
      <Text style={styles.wallet}>{shortenAddress(walletAddress)}</Text>
      <Text style={styles.balance}>{nativeBalance}</Text>
    </View>
  );
};

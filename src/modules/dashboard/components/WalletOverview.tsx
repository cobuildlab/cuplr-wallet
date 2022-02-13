import React, { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';

import { Wallet } from '../../../constants/types';
import { GradientCard } from '../../../shared/components/gradient-card/GradientCard';

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

export const WalletOverview = ({
  wallet,
}: {
  wallet: Wallet;
}): ReactElement => {
  return (
    <View style={styles.container}>
      <GradientCard startColor={theme.lightGray} endColor={theme.lightGray}>
        <Text style={styles.wallet}>{wallet?.address}</Text>
        <Text style={styles.balance}>
          {Number.parseFloat(wallet?.tokens?.[0]?.balance as string).toFixed(8)}{' '}
          WEI
        </Text>
      </GradientCard>
    </View>
  );
};

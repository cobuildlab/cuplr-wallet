import React, { ReactElement } from 'react';
import { SafeAreaView, View, StatusBar, StyleSheet } from 'react-native';

import { TransactionsOverview } from './components/TransactionsOverview';

import { useERC20Transfers } from '../../hooks';

const styles = StyleSheet.create({
  container: {
    padding: 32,
    width: '100%',
    height: '100%',
    paddingBottom: 0,
  },
  centeredContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 32,
  },
});

export const Transactions = (): ReactElement => {
  const { ERC20Transfers } = useERC20Transfers();

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <TransactionsOverview transactions={ERC20Transfers} />
      </View>
    </SafeAreaView>
  );
};

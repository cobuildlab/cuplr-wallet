import React, { ReactElement } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { shortenAddress } from '../../../utils/helpers';
import { getTransactionTimestamp } from '../../../utils/api';
import { theme } from '../../../constants/theme';
import { FontAwesome } from '@expo/vector-icons';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import Web3 from 'web3';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconContainer: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueContainer: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  value: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionContainer: {
    width: '50%',
  },
  icon: {
    fontSize: 16,
    color: theme.gray,
  },
  indicator: {
    fontWeight: '600',
    color: theme.gray,
  },
  address: {
    fontWeight: '600',
    color: theme.red,
    backgroundColor: theme.lightRed,
    padding: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  method: {
    fontWeight: '600',
    color: theme.orange,
  },
  timestamp: {
    color: theme.gray,
  },
  row: {
    flexDirection: 'row',
  },
  arrow: {
    marginTop: 2,
    marginLeft: 8,
    marginRight: 8,
    color: theme.gray,
  },
});

export const TransactionCard = ({ transaction }): ReactElement => {
  const connector = useWalletConnect();
  const isSending =
    transaction.from.toLowerCase() === connector?.accounts?.[0]?.toLowerCase();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome name="handshake-o" style={styles.icon} />
      </View>
      <View style={styles.transactionContainer}>
        <View style={styles.row}>
          <Text style={styles.indicator}>{isSending ? 'To' : 'From'}</Text>
          <FontAwesome name="arrow-right" style={styles.arrow} />
          <Text style={styles.address}>{shortenAddress(transaction.to)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.method}>{transaction.method}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.timestamp}>
            {getTransactionTimestamp(
              transaction.timestamp,
            ).toLocaleDateString()}
          </Text>
        </View>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>
          {isSending ? '-' : ''}
          {Number.parseFloat(
            Web3.utils.fromWei(transaction.value, 'ether'),
          ).toFixed(4)}{' '}
          ETH
        </Text>
      </View>
    </View>
  );
};

import React, { ReactElement } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useMoralis } from 'react-moralis';
import { faArrowUp, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { theme } from '../../../constants/theme';
import { shortenAddress } from '../../../utils/helpers';
import { getTransactionTimestamp } from '../../../utils/api';

import { useMoralisDapp } from '../../../providers/MoralisDappProvider/MoralisDappProvider';

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
  iconSending: {
    transform: [{ rotate: '45deg' }],
  },
  iconReceiving: {
    transform: [{ rotate: '225deg' }],
  },
  indicator: {
    marginTop: 2,
    marginRight: 4,
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
  const { Moralis } = useMoralis();
  const { walletAddress } = useMoralisDapp();

  const isSending =
    transaction.from_address.toLowerCase() === walletAddress.toLowerCase();

  const iconStyles = isSending ? styles.iconSending : styles.iconReceiving;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon
          icon={faArrowUp}
          style={{ ...styles.icon, ...iconStyles }}
          size={16}
        />
      </View>
      <View style={styles.transactionContainer}>
        <View style={styles.row}>
          <Text style={styles.indicator}>{isSending ? 'To' : 'From'}</Text>
          <Text style={styles.address}>
            {shortenAddress(
              isSending ? transaction.to_address : transaction.from_address,
            )}
          </Text>
        </View>
        {/* <View style={styles.row}>
          <Text style={styles.method}>{transaction.}</Text>
        </View> */}
        <View style={styles.row}>
          <Text style={styles.timestamp}>
            {getTransactionTimestamp(transaction.block_timestamp)}
          </Text>
        </View>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>
          {isSending ? '-' : ''}
          {Moralis.Units.FromWei(transaction.value, 18).toFixed(3)}
        </Text>
      </View>
    </View>
  );
};

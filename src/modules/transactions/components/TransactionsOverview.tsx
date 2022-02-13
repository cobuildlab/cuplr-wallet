import React, { ReactElement } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { TransactionCard } from './TransactionCard';
import { theme } from '../../../constants/theme';
import { Transaction } from '../../../constants/types';

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginBottom: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerText: {
    fontWeight: 'bold',
  },
  transaction: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailText: {
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: theme.lightGray,
  },
  list: {
    paddingBottom: 100,
  },
});

export const TransactionsOverview = ({
  transactions,
}: {
  transactions: Transaction[];
}): ReactElement => {
  return (
    <View>
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionCard transaction={item} />}
        style={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={({ transactionIndex }) => transactionIndex}
      />
    </View>
  );
};

import React, { ReactElement } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';
import { OutlinedInput } from '../../../shared/components/outlined-input/OutlinedInput';
import { shortenAddress } from '../../../utils/helpers';

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
  },
  inputDisabled: {
    borderColor: theme.gray,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  message: {
    color: theme.gray,
  },
  bold: {
    fontWeight: '600',
  },
  address: {
    fontWeight: '600',
    color: theme.red,
    backgroundColor: theme.lightRed,
    padding: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
});

export const TransactionForm = ({
  asset,
  amount,
  receiver,
  onEnterAmount,
  onEnterReceiver,
  disabled = false,
}): ReactElement => {
  const canEnterRecipient = !disabled;
  const canEnterAmount = !disabled && receiver.length > 16;

  return (
    <View>
      <OutlinedInput
        value={receiver}
        onChangeText={onEnterReceiver}
        placeholder="Address"
        style={styles.input}
        disabled={!canEnterRecipient}
      />
      <OutlinedInput
        value={amount}
        onChangeText={onEnterAmount}
        placeholder="Amount"
        style={styles.input}
        keyboardType="numeric"
        disabled={!canEnterAmount}
      />
      {amount ? (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>
            Sending: {Number.parseFloat(amount).toFixed(3)}{' '}
            <Text style={styles.bold}>{asset.symbol}</Text> to{' '}
          </Text>
          <Text style={styles.address}>{shortenAddress(receiver)}</Text>
        </View>
      ) : null}
    </View>
  );
};

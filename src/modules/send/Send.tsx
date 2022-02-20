import React, { ReactElement, useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import { StatusBar, Text, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigator } from '../../hooks';
import { useERC20Transfers } from '../../hooks/';
import { SelectAsset } from './components/SelectAsset';
import { SendAsset } from './components/SendAsset';
import { StepTitle } from './components/StepTitle';
import { TransactionForm } from './components/TransactionForm';

const styles = StyleSheet.create({
  container: {
    padding: 32,
  },
  stepTitle: {
    marginBottom: 32,
  },
  stepContainer: {
    marginBottom: 32,
  },
});

export const StepContainer = ({ number, title, children }): ReactElement => {
  return (
    <View style={styles.stepContainer}>
      <StepTitle number={number} title={title} style={styles.stepTitle} />
      {children}
    </View>
  );
};

export const Send = ({ navigation }): ReactElement => {
  const navigator = useNavigator(navigation);

  const { Moralis } = useMoralis();

  const [asset, setAsset] = useState(null);
  const [amount, setAmount] = useState('');
  const [receiver, setReceiver] = useState('');

  const sendAsset = async (): Promise<void> => {
    const options = {
      type: 'erc20',
      amount: Moralis.Units.Token(amount, asset.decimals),
      receiver,
      contractAddress: asset.token_address,
    };

    const transaction = await Moralis.transfer(options);
    const result = await transaction.wait();

    console.log(result);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView style={styles.container}>
        <StepContainer number={1} title="Select an asset">
          <SelectAsset
            onSelect={setAsset}
            navigator={navigator}
            disabled={!!asset}
          />
        </StepContainer>
        <StepContainer number={2} title="Choose an amount">
          <TransactionForm
            asset={asset}
            amount={amount}
            receiver={receiver}
            onEnterAmount={setAmount}
            onEnterReceiver={setReceiver}
            disabled={!asset}
          />
        </StepContainer>
        <StepContainer number={3} title="Send the asset">
          <SendAsset onSend={sendAsset} disabled={!receiver || !amount} />
        </StepContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

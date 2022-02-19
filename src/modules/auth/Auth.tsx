import React, { ReactElement, useEffect } from 'react';
import { SafeAreaView, View, Image, StatusBar, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { GradientButton } from '../../shared/components/gradient-button/GradientButton';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  image: {
    width: 128,
    height: 128,
    marginBottom: 64,
  },
});

export const Auth = ({ navigation }): ReactElement => {
  const connector = useWalletConnect();

  useEffect(() => {
    if (connector.connected) {
      const action = CommonActions.reset({
        index: 0,
        routes: [{ name: 'Root' }],
      });
      navigation.dispatch(action);
    }
  }, [connector.connected]);

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/cplr.png')}
          style={styles.image}
        />
        <GradientButton onPress={() => connector.connect()} title="Connect" />
      </View>
    </SafeAreaView>
  );
};

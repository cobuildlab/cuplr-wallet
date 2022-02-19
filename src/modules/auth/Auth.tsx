import React, { ReactElement, useEffect } from 'react';
import { SafeAreaView, View, Image, StatusBar, StyleSheet } from 'react-native';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { IconButton } from '../../shared/components/icon-button/IconButton';
import { useNavigator } from '../../hooks';

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
  const navigator = useNavigator(navigation);

  useEffect(() => {
    if (connector.connected) {
      navigator.resetAndNavigateTo('Root');
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
        <IconButton
          icon={require('../../../assets/images/walletconnect.png')}
          onPress={() => connector.connect()}
          title="Use WalletConnect"
        />
      </View>
    </SafeAreaView>
  );
};

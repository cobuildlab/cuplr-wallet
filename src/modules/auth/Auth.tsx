import React, { ReactElement, useEffect } from 'react';
import { SafeAreaView, View, Image, StatusBar, StyleSheet } from 'react-native';
import { useMoralis } from 'react-moralis';

import { IconButton } from '../../shared/components/icon-button/IconButton';

import { useNavigator } from '../../hooks';
import { useWalletConnect } from '../../lib/WalletConnect';

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

  const { authenticate, isAuthenticated } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      navigator.resetAndNavigateTo('Root');
    }
  }, [isAuthenticated]);

  const connect = (): void => {
    authenticate({ connector })
      .then(() => {
        if (isAuthenticated) {
          navigator.resetAndNavigateTo('Root');
        }
      })
      .catch((e) => console.log(e));
  };

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
          onPress={() => connect()}
          title="Use WalletConnect"
        />
      </View>
    </SafeAreaView>
  );
};

import React, { ReactElement } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import { useERC20Balance, useNavigator } from '../../hooks';

import { AssetsList } from './components/AssetsList';

const styles = StyleSheet.create({
  container: {
    padding: 32,
    width: '100%',
    height: '100%',
    paddingBottom: 0,
  },
});

export const Assets = ({ route, navigation }): ReactElement => {
  const { onSelect } = route.params;

  const navigator = useNavigator(navigation);
  const { assets } = useERC20Balance();

  const chooseAsset = (asset): void => {
    onSelect(asset);
    navigator.goBack();
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <AssetsList assets={assets} onSelect={chooseAsset} />
      </View>
    </SafeAreaView>
  );
};

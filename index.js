/* eslint-disable no-undef */
import './global';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { withWalletConnect } from '@walletconnect/react-native-dapp';
import { registerRootComponent } from 'expo';

import { App } from './src/App';
import * as app from './app.json';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(
  withWalletConnect(App, {
    redirectUrl:
      Platform.OS === 'web' ? window.location.origin : `${app.scheme}://`,
    storageOptions: {
      asyncStorage: AsyncStorage,
    },
  }),
);

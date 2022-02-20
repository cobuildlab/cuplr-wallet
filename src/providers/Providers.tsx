import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Moralis from 'moralis/react-native';
import { MoralisProvider } from 'react-moralis';

import WalletConnectProvider, {
  WalletConnectProviderProps,
} from '../lib/WalletConnect';
import { MoralisDappProvider } from './MoralisDappProvider/MoralisDappProvider';

import { enableViaWalletConnect } from '../connectors/walletConnect';

import {
  REACT_APP_MORALIS_APPLICATION_ID,
  REACT_APP_MORALIS_SERVER_URL,
} from '@env';

/**
 * Initialization of Moralis
 */
const appId = REACT_APP_MORALIS_APPLICATION_ID;
const serverUrl = REACT_APP_MORALIS_SERVER_URL;
const environment = 'native';

Moralis.setAsyncStorage(AsyncStorage);
Moralis.enable = enableViaWalletConnect;

const walletConnectOptions: WalletConnectProviderProps = {
  storageOptions: {
    asyncStorage: AsyncStorage,
  },
  qrcodeModalOptions: {
    mobileLinks: [
      'rainbow',
      'metamask',
      'argent',
      'trust',
      'imtoken',
      'pillar',
    ],
  },
  // Uncomment to show a QR-code to connect a wallet
  //renderQrcodeModal: Qrcode,
};

export const Providers = ({ children }) => {
  return (
    <WalletConnectProvider {...walletConnectOptions}>
      <MoralisProvider
        appId={appId}
        serverUrl={serverUrl}
        environment={environment}>
        <MoralisDappProvider>{children}</MoralisDappProvider>
      </MoralisProvider>
    </WalletConnectProvider>
  );
};

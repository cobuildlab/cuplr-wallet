import React, { useEffect, useMemo, useState } from 'react';
import { useMoralis } from 'react-moralis';
import MoralisDappContext from './context';

function MoralisDappProvider({ children }) {
  const { web3, Moralis, user } = useMoralis();

  const [walletAddress, setWalletAddress] = useState();
  const [chainId, setChainId] = useState();

  useEffect(() => {
    Moralis.onChainChanged(function (chain) {
      setChainId(chain);
    });

    Moralis.onAccountsChanged(function (address) {
      setWalletAddress(address[0]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => setChainId(web3.givenProvider?.chainId));

  useMemo(
    () =>
      setWalletAddress(
        web3.givenProvider?.selectedAddress || user?.get('ethAddress'),
      ),
    [web3, user],
  );

  return (
    // USE THIS TO SKIP LOGIN THROUGH WALLET (FOR DEVELOPMENT PURPOSES)
    // <MoralisDappContext.Provider
    //   value={{
    //     walletAddress: '0xb31afE4Edf11168e90E60d8778F5556Ef222f2E9',
    //     chainId: '0x38',
    //   }}>
    //   {children}
    // </MoralisDappContext.Provider>

    //USE THIS DURING PRODUCTION
    <MoralisDappContext.Provider value={{ walletAddress, chainId: '0x38' }}>
      {children}
    </MoralisDappContext.Provider>
  );
}

function useMoralisDapp() {
  const context = React.useContext(MoralisDappContext);

  if (!context) {
    throw new Error('useMoralisDapp must be used within a MoralisDappProvider');
  }

  return context;
}

export { MoralisDappProvider, useMoralisDapp };

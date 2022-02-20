import { useEffect, useState } from 'react';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';

import { getNativeByChain } from '../utils/getNativeByChain';
import { n4 } from '../utils/formatters';

import { useMoralisDapp } from '../providers/MoralisDappProvider/MoralisDappProvider';

export const useNativeBalance = (chain) => {
  const { account } = useMoralisWeb3Api();
  const { isInitialized, Moralis } = useMoralis();
  const { walletAddress, chainId } = useMoralisDapp();

  const [nativeBalance, setNativeBalance] = useState();
  const [assets, setAssets] = useState();

  useEffect(() => {
    if (isInitialized) {
      //pick from passed down chain into component or default app level chain
      const chainFinal = chain || chainId;
      const native = getNativeByChain(chainFinal);

      fetchNativeBalance()
        .then((result) => {
          //   console.log('BALANCE', result);
          const balanceInWei = Moralis.Units.FromWei(result.balance);
          const balanceFormatted = `${n4.format(balanceInWei)} ${native}`;
          setNativeBalance(balanceFormatted);
        })
        .catch((error) => alert(error.message));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, chainId, walletAddress]);

  const fetchNativeBalance = async () => {
    //pick from passed down chain into component or default app level chain
    const chainFinal = chain || chainId;
    const options = { address: walletAddress, chain: chainFinal };

    return await account
      .getNativeBalance(options)
      .then((result) => result)
      .catch((error) => alert(error.message));
  };

  return { fetchNativeBalance, nativeBalance };
};

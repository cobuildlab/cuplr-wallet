import { useEffect, useState } from 'react';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';

import { useMoralisDapp } from '../providers/MoralisDappProvider/MoralisDappProvider';

export const useERC20Transfers = () => {
  const { account } = useMoralisWeb3Api();
  const { isInitialized } = useMoralis();
  const { walletAddress, chainId } = useMoralisDapp();

  const [ERC20Transfers, setERC20Transfers] = useState();

  useEffect(() => {
    if (isInitialized)
      fetchERC20Transfers()
        .then((balance) => setERC20Transfers(balance))
        .catch((error) => alert(error.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, walletAddress]);

  const fetchERC20Transfers = async () => {
    return await account
      .getTokenTransfers({ address: walletAddress, chain: chainId })
      .then((result) => result.result)
      .catch((error) => alert(error.message));
  };

  return { fetchERC20Transfers, ERC20Transfers };
};

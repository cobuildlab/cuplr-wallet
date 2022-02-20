import { useEffect, useState } from 'react';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';
import { useMoralisDapp } from '../providers/MoralisDappProvider/MoralisDappProvider';

export const useERC20Balance = (props) => {
  const { account } = useMoralisWeb3Api();
  const { Moralis, isInitialized } = useMoralis();
  const { walletAddress, chainId } = useMoralisDapp();

  const [assets, setAssets] = useState();

  useEffect(() => {
    if (isInitialized) {
      fetchERC20Balance()
        .then((balance) => setAssets(balance))
        .catch((e) => alert(e.message));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, chainId, walletAddress]);

  const fetchERC20Balance = async () => {
    const erc20Balances = await account
      .getTokenBalances({
        address: walletAddress,
        chain: props?.chain || chainId,
      })
      .then((result) => result)
      .catch((e) => alert(e.message));

    const [cuplrToken] = await Moralis.Web3API.token
      .getTokenMetadata({
        chain: '0x38',
        addresses: ['0x0D3608CE95Cd2b561298BeeD3F9fd3DDD3083163'],
      })
      .then((data) => data)
      .catch((e) => alert(e.message));

    if (
      !erc20Balances.find((token) => token.token_address === cuplrToken.address)
    ) {
      erc20Balances.unshift({
        balance: '0',
        decimals: cuplrToken.decimals,
        logo: cuplrToken.logo,
        name: cuplrToken.name,
        symbol: cuplrToken.symbol,
        thumbnail: cuplrToken.thumbnail,
        token_address: cuplrToken.address,
      });
    }

    return erc20Balances;
  };

  return { fetchERC20Balance, assets };
};

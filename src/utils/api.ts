import axios, { AxiosInstance } from 'axios';
import { tokens } from './tokens';
import { Token, Transaction } from '../constants/types';
import { API_KEY } from '../constants';

const api: AxiosInstance = axios.create({
  baseURL: 'https://api.bscscan.com',
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getTokenBalance = async (
  address: string,
  contractAddress: string,
): Promise<string> => {
  const response = await api.get(
    `/api?module=account&action=tokenbalance&address=${address}&contractaddress=${contractAddress}&apikey=${API_KEY}`,
  );
  const { result } = response.data;

  return result;
};

export const getWalletBalance = async (address: string): Promise<Token[]> => {
  const wallet: Token[] = [];

  for (const token of Object.keys(tokens)) {
    wallet.push({
      symbol: tokens[token].symbol,
      contractAddress: tokens[token].contractAddress,
      balance: await getTokenBalance(address, tokens[token].contractAddress),
    });
  }

  return wallet;
};

export const getTransactionMethod = async (
  methodId: string,
): Promise<string> => {
  try {
    const response = await axios.get(
      `https://raw.githubusercontent.com/ethereum-lists/4bytes/master/signatures/${methodId.slice(
        2,
      )}`,
    );

    return response.data.slice(0, response.data.indexOf('('));
  } catch {
    return methodId;
  }
};

export const getTransactionTimestamp = (timestamp: string): string => {
  return new Date(timestamp).toDateString();
};

export const getWalletTransactions = async (
  address: string,
  page = 1,
  offset = 25,
  sort = 'desc',
): Promise<Transaction[]> => {
  const transactions: Transaction[] = [];

  const response = await api.get(
    `/api?module=account&action=txlist&address=${address}&startblock=0&endblock=999999999&page=${page}&offset=${offset}&sort=${sort}&apikey=${API_KEY}`,
  );
  const { result } = response.data;

  for (const transaction of result) {
    const methodName = await getTransactionMethod(
      transaction?.input?.slice(0, 10),
    );

    transactions.push({
      from: transaction.from,
      to: transaction.to,
      value: transaction.value,
      method: methodName,
      hash: transaction.hash,
      timestamp: transaction.timeStamp,
      index: transaction.transactionIndex,
    });
  }

  return transactions;
};

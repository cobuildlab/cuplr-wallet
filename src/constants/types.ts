export interface Token {
  symbol: string;
  contractAddress: string;
  balance?: string | number;
}

export interface Wallet {
  address: string;
  tokens: Token[];
}

export interface Transaction {
  from: string;
  to: string;
  value: string;
  method: string;
  hash: string;
  timestamp: string;
  transactionIndex: string;
}

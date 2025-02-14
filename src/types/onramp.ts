export type SupportedBlockchains =
  | 'algorand'
  | 'avalanche-c-chain'
  | 'bitcoin'
  | 'bitcoin-cash'
  | 'cardano'
  | 'celo'
  | 'cosmos'
  | 'dash'
  | 'dfinity'
  | 'dogecoin'
  | 'eos'
  | 'ethereum'
  | 'ethereum-classic'
  | 'filecoin'
  | 'flow'
  | 'horizen'
  | 'litecoin'
  | 'optimism'
  | 'polkadot'
  | 'solana'
  | 'stellar'
  | 'tezos'
  | 'zcash';

export type DestinationWallet = {
  /* Destination address where the purchased assets will be sent. */
  address: string;
  /** List of networks enabled for the associated address. All assets available per network are displayed to the user. */
  blockchains?: string[];
  /** List of assets enabled for the associated address. They are appended to the available list of assets. */
  assets?: string[];
  /** Restrict the networks available for the associated assets. */
  supportedNetworks?: string[];
};

export type OnRampAppParams = {
  /** The destination wallets supported by your application (BTC, ETH, etc). */
  destinationWallets: DestinationWallet[];
  /** The preset input amount as a crypto value. i.e. 0.1 ETH. This will be the initial default for all cryptocurrencies. */
  presetCryptoAmount?: number;
  /**
   * The preset input amount as a fiat value. i.e. 15 USD.
   * This will be the initial default for all cryptocurrencies. Ignored if presetCryptoAmount is also set.
   * Also note this only works for a subset of fiat currencies: USD, CAD, GBP, EUR
   * */
  presetFiatAmount?: number;
  /** The default network that should be selected when multiple networks are present. */
  defaultNetwork?: string;
};

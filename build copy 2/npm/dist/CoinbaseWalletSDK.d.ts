import { EventListener } from "./connection/EventListener";
import { CoinbaseWalletProvider } from "./provider/CoinbaseWalletProvider";
import { WalletUI, WalletUIOptions } from "./provider/WalletUI";
/** Coinbase Wallet SDK Constructor Options */
export interface CoinbaseWalletSDKOptions {
    /** Application name */
    appName: string;
    /** @optional Application logo image URL; favicon is used if unspecified */
    appLogoUrl?: string | null;
    /** @optional Use dark theme */
    darkMode?: boolean;
    /** @optional Coinbase Wallet link server URL; for most, leave it unspecified */
    linkAPIUrl?: string;
    /** @optional an implementation of WalletUI; for most, leave it unspecified */
    uiConstructor?: (options: Readonly<WalletUIOptions>) => WalletUI;
    /** @optional an implementation of EventListener for debugging; for most, leave it unspecified  */
    eventListener?: EventListener;
    /** @optional whether wallet link provider should override the isMetaMask property. */
    overrideIsMetaMask?: boolean;
    /** @optional whether wallet link provider should override the isCoinbaseWallet property. */
    overrideIsCoinbaseWallet?: boolean;
    /** @optional whether or not onboarding overlay popup should be displayed */
    headlessMode?: boolean;
}
export declare class CoinbaseWalletSDK {
    static VERSION: any;
    private _appName;
    private _appLogoUrl;
    private _relay;
    private _relayEventManager;
    private _storage;
    private _overrideIsMetaMask;
    private _overrideIsCoinbaseWallet;
    private _eventListener?;
    /**
     * Constructor
     * @param options Coinbase Wallet SDK constructor options
     */
    constructor(options: Readonly<CoinbaseWalletSDKOptions>);
    /**
     * Create a Web3 Provider object
     * @param jsonRpcUrl Ethereum JSON RPC URL (Default: "")
     * @param chainId Ethereum Chain ID (Default: 1)
     * @returns A Web3 Provider
     */
    makeWeb3Provider(jsonRpcUrl?: string, chainId?: number): CoinbaseWalletProvider;
    /**
     * Set application information
     * @param appName Application name
     * @param appLogoUrl Application logo image URL
     */
    setAppInfo(appName: string | undefined, appLogoUrl: string | null | undefined): void;
    /**
     * Disconnect. After disconnecting, this will reload the web page to ensure
     * all potential stale state is cleared.
     */
    disconnect(): void;
    /**
     * Return QR URL for mobile wallet connection, will return null if extension is installed
     */
    getQrUrl(): string | null;
    private get walletExtension();
    private isCipherProvider;
}
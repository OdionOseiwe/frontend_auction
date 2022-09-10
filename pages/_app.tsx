import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../Layout/main'
import { WagmiConfig, createClient , chain} from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";


const alchemyId = process.env.ALCHEMY_ID;

const chains = [chain.mainnet, chain.polygon, chain.optimism, chain.rinkeby, chain.goerli, chain.optimismKovan, chain.kovan];

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
    chains,
  }),
);



function MyApp({ Component, pageProps }: AppProps) {
  return <>
      <WagmiConfig client={client}>
        <ConnectKitProvider theme='auto' mode='dark'>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
      </ConnectKitProvider>
    </WagmiConfig>
         
         </>
  
}

export default MyApp

import type { AppProps } from "next/app";

export default function App({Component, pageProps}: AppProps){
    return <Component {...pageProps} />
}
// Compare this snippet from src/pages/index.tsx: 
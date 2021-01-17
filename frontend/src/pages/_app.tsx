import { AppProps } from "next/app";
import '../styles/globals.css'


function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

  return <Component {...pageProps} />
}

export default MyApp

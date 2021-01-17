import { AppProps } from 'next/app';
import { FC } from 'react';
import '../styles/globals.css';

const MyApp: FC<AppProps> = (props: AppProps) => {
    const { Component, pageProps } = props;

    return <Component {...pageProps} />;
};

export default MyApp;

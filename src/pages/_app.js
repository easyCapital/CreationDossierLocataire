import "antd/dist/antd.css";
import "antd-mobile/dist/antd-mobile.css";
import "../styles/globals.scss";
import Head from "next/head";
import Navbar from "../components/global/Layout/navbar";
import { useRouter } from "next/router";
import React from "react";
import { Provider } from "react-redux";
import { useStore } from "../redux/CreateStore";
import AuthProvider from "../providers/AuthProvider";

function MyApp({ Component, pageProps }) {
  const site = "https://espace-client-easycapital.vercel.app";
  const router = useRouter();
  const canonicalURL = site + router.asPath;
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Navbar />
      <Head>
        <title>
          Outil de gestion de patrimoine – Easy Capital, cabinet à Bordeaux
        </title>
        <meta
          name="description"
          content="Le seul outil de gestion de patrimoine accessible qui compare toutes les solutions d’investissements immobilières ou financières afin d’optimiser votre fiscalité."
        />
        <link rel="canonical" href={canonicalURL} />
        <link
          rel="icon"
          href="https://res.cloudinary.com/easycapital/image/upload/v1623230243/espace_client/zifepqxqhcunrtosgv0j.ico"
        />
      </Head>
      {/* <AuthProvider> */}
        <Component {...pageProps} />
      {/* </AuthProvider> */}
    </Provider>
  );
}

export default MyApp;

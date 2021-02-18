/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { DefaultSeo } from 'next-seo';
import { Navbar, Footer, Container } from 'react-bulma-components';
import './styles.css';

library.add(fab, fas, far);

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Among Us Note</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <script
        data-ad-client="ca-pub-1424417569342773"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
    </Head>
    <DefaultSeo
      title="Among Us Note"
      description="Among Usのゲーム中に簡単にメモを取ろう！"
      canonical="https://amongus.amalog.net"
      openGraph={{
        url: 'https://amongus.amalog.net',
        title: 'Among Us Note',
        description: 'Among Usのゲーム中に簡単にメモを取ろう！',
        images: [{ url: 'https://amoungus.amalog.net/ogp.png', width: 1200, height: 630 }],
        site_name: 'Among Us Note',
      }}
      twitter={{
        handle: '@SakuEji',
        cardType: 'summary_card_large',
      }}
    />
    <Navbar color="light">
      <Navbar.Brand>
        <Navbar.Item>Among Us Note</Navbar.Item>
      </Navbar.Brand>
    </Navbar>
    <div className="hero is-fullheight-with-navbar">
      <main>
        <div>
          <Component {...pageProps} />
        </div>
      </main>
      <Footer>
        <Container style={{ textAlign: 'center' }}>
          <p>
            <strong>Among Us Note</strong> by <a href="https://twitter.com/SakuEji">Amane Suzuki</a>
          </p>
        </Container>
      </Footer>
    </div>
  </>
);

export default App;

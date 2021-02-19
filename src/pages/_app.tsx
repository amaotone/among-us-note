/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { DefaultSeo } from 'next-seo';
import { Navbar, Footer, Container } from 'react-bulma-components';
import * as gtag from 'utils/gtag';
import { baseUrl } from 'models/constant';
import './styles.css';

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));
library.add(fab, fas, far);

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo
      title="Among Us Note"
      description="Among Usのメモを簡単に取ろう！"
      canonical={baseUrl}
      openGraph={{
        url: baseUrl,
        title: 'Among Us Note',
        description: 'Among Usのメモを簡単に取ろう！',
        images: [{ url: `${baseUrl}/ogp.png`, width: 1200, height: 630 }],
        site_name: 'Among Us Note',
      }}
      twitter={{
        handle: '@SakuEji',
        cardType: 'summary_large_image',
      }}
    />
    <Head>
      <title>Among Us Note</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <script
        data-ad-client="ca-pub-1424417569342773"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>

    <Navbar color="light">
      <Navbar.Brand>
        <Navbar.Item>Among Us Note</Navbar.Item>
      </Navbar.Brand>
    </Navbar>
    <div className="hero is-fullheight-with-navbar main">
      <main>
        <div>
          <Component {...pageProps} />
        </div>
      </main>
      <Footer>
        <Container style={{ textAlign: 'center' }}>
          <p>
            <strong>Among Us Note</strong>
          </p>
          <p>
            Created by <a href="https://twitter.com/SakuEji">Amane Suzuki (@SakuEji)</a>
          </p>
        </Container>
      </Footer>
    </div>
  </>
);

export default App;

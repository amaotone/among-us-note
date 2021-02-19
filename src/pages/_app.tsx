/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { DefaultSeo } from 'next-seo';
import { Navbar, Footer, Container, Hero } from 'react-bulma-components';
import * as gtag from 'utils/gtag';
import { baseUrl } from 'models/constant';
import './styles.css';

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));
library.add(fab, fas, far);

const App = ({ Component, pageProps }: AppProps) => {
  const mainRef = React.createRef();
  const adsenseInjectorObserver = null;

  useEffect(() => {
    const elem = document.getElementsByClassName('is-fullheight')[0];
    const observer = new MutationObserver((mutations, observer) => {
      elem.style.removeProperty('min-height');
      elem.style.removeProperty('height');
    });
    observer.observe(elem, {
      attributes: true,
      attributesFilter: ['style'],
    });
  }, []);

  return (
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
      <Hero size="fullheight">
        <Hero.Head renderAs="header">
          <Navbar color="light">
            <Navbar.Brand>
              <Navbar.Item>Among Us Note</Navbar.Item>
            </Navbar.Brand>
          </Navbar>
        </Hero.Head>
        <main className="main">
          <div>
            <Component {...pageProps} />
          </div>
        </main>
        <Hero.Footer>
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
        </Hero.Footer>
      </Hero>
    </>
  );
};

export default App;

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { Navbar, Footer, Container } from 'react-bulma-components';
import './styles.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';

library.add(fab, fas, far);

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Among Us Note</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script
        data-ad-client="ca-pub-1424417569342773"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
    </Head>
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

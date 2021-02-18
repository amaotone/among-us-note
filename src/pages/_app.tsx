/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import Template from 'components/templates/default';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './styles.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Template>
      <Component {...pageProps} />
    </Template>
  </>
);

export default App;

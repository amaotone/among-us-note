import React from 'react';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components';

library.add(fab, fas, far);

type Props = {
  noindex?: boolean;
  title?: string;
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = (props: Props) => {
  const { noindex, title, children } = props;

  return (
    <div>
      <Head>
        <title>{title ? `${title}｜Among Us Note` : 'Among Us Note'}</title>
        {noindex && <meta name="robots" content="noindex" />}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          data-ad-client="ca-pub-1424417569342773"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      </Head>
      <Navbar color="light">
        <Navbar.Brand>
          <Navbar.Item>Among Us Note / あもあすのーと</Navbar.Item>
        </Navbar.Brand>
      </Navbar>
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
};

Layout.defaultProps = {
  noindex: false,
  title: '',
  children: <div>children</div>,
};

export default Layout;

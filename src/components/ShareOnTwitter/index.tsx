import React from 'react';
import { Button } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShareOnTwitter: React.FC = () => {
  const url = 'https://amongus.amalog.net';
  const message = 'Among Usのメモを手軽に取って、楽しく遊びましょう！ %23AmongUsNote%0A';

  return (
    <>
      <Button
        color="info"
        renderAs="a"
        outlined
        href={`https://twitter.com/intent/tweet?url=${url}&text=${message}`}
      >
        <i className="fab fa-twitter fa-fw" />
        Share on Twitter
      </Button>
    </>
  );
};

export default ShareOnTwitter;

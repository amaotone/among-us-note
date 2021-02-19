import React from 'react';
import { Button } from 'react-bulma-components';
import { baseUrl } from 'models/constant';

const ShareOnTwitter: React.FC = () => {
  const url = baseUrl;
  const message =
    '手軽に使えるAmong Usのメモです。怪しい人を見つけるのにも、自分の潔白をアピールするのにも使えます。 %23AmongUsNote';

  return (
    <>
      <Button
        color="info"
        renderAs="a"
        outlined
        href={`https://twitter.com/intent/tweet?url=${url}&text=${message}`}
      >
        <span className="icon">
          <i className="fab fa-twitter fa-fw" />
        </span>
        <span>Twitterでシェア</span>
      </Button>
    </>
  );
};

export default ShareOnTwitter;

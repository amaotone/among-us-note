import React, { useEffect } from 'react';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    adsbygoogle: any;
  }
}

interface Props {
  slot: string;
}

const AdsenseCard: React.FC<Props> = (props: Props) => {
  const { slot } = props;

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-1424417569342773"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdsenseCard;

import React, { useEffect } from 'react';

const AdsenseCard: React.FC = () => {
  useEffect(() => {
    if (window.adsbygoogle && process.env.NODE_ENV !== 'development') {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-1424417569342773"
      data-ad-slot="6258822796"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdsenseCard;

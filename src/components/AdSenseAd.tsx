// components/AdSenseAd.tsx
import React, { useEffect } from 'react';

const AdSenseAd: React.FC = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <div style={{ width: '250px', margin: 'auto' }}> {/* Adjust width as needed */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4157952107930888"
        data-ad-slot="8316282406"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseAd;

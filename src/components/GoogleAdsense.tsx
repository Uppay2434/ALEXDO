"use client";

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const GoogleAdsense = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <>
      {/* Google AdSense Script */}
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4157952107930888"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      
      {/* Square Ad Unit */}
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4157952107930888"
        data-ad-slot="8316282406"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </>
  );
};

export default GoogleAdsense;

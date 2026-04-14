"use client";
import { useEffect, useRef, useState } from "react";

export default function AdComponent() {
  const adRef = useRef(null);
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        adRef.current &&
        adRef.current.offsetWidth > 0 &&
        window.adsbygoogle
      ) {
        try {
          window.adsbygoogle.push({});
          setShowAd(true); // 👈 show only after push
          clearInterval(interval);
        } catch (e) {
          console.log(e);
        }
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // ❌ Don't render anything if no ad
  if (!showAd) return null;

  return (
    <div className="my-8 w-full max-w-6xl mx-auto flex justify-center">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
          minHeight: "100px",
        }}
        data-ad-client="ca-pub-8109343075563496"
        data-ad-slot="5738403915"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
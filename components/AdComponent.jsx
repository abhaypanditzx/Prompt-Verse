"use client";
import { useEffect, useRef } from "react";

export default function AdComponent() {
  const adRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        adRef.current &&
        adRef.current.offsetWidth > 0 &&
        window.adsbygoogle
      ) {
        try {
          window.adsbygoogle.push({});
          clearInterval(interval);
        } catch (e) {
          console.log(e);
        }
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 flex justify-center w-full">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client="ca-pub-8109343075563496"
        data-ad-slot="5738403915"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
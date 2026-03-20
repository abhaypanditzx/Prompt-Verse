"use client";
import { useEffect, useRef } from "react";

export default function AdComponent() {
  const adRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && adRef.current) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            observer.disconnect();
          } catch (e) {
            console.log(e);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (adRef.current) observer.observe(adRef.current);

    return () => observer.disconnect();
  }, []);

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
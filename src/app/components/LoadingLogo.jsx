'use client';

import { useState, useEffect } from 'react';

export default function LoadingLogo({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-[#f6f0e6] z-50">
          <video
            src="/video/LoadingLogo.mp4"
            autoPlay
            muted
            playsInline
            className="w-1/4 max-w-[200px] object-contain"
          />
          <div><h1>This portfolio is being upgraded<br/> the responsiveness will be imporoved thus far first three web pages are done      </h1></div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
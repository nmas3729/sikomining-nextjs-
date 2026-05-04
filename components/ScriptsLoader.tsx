'use client';

import { useEffect } from 'react';

const scriptsToLoad = [
  "/js/jquery-3.1.0.min.js",
  "/js/popper.min.js",
  "/js/bootstrap.min.js",
  "/js/jquery.pogo-slider.min.js",
  "/js/owl.carousel.js",
  "/js/easing.js",
  "/js/main.js",
  "/js/scripts.js"
];

export default function ScriptsLoader() {
  useEffect(() => {
    let currentPromise = Promise.resolve();

    scriptsToLoad.forEach(src => {
      currentPromise = currentPromise.then(() => {
        return new Promise<void>((resolve, reject) => {
          if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
          }
          const script = document.createElement('script');
          script.src = src;
          script.async = false;
          script.defer = true;
          script.onload = () => resolve();
          script.onerror = () => {
             console.error(`Failed to load script: ${src}`);
             resolve(); // Resolve anyway so subsequent scripts attempt to load
          };
          document.body.appendChild(script);
        });
      });
    });
  }, []);

  return null;
}

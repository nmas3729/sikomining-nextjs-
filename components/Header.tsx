'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="logo">
              <Image 
                src="/images/logo.png" 
                alt="Siko Mining" 
                width={180} 
                height={60}
                priority
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            <div className="top-logo d-flex justify-content-end">
              <Image 
                src="/images/top-logo1.png" 
                alt="Partner 1" 
                width={80} 
                height={40}
                style={{ margin: '0 10px', width: 'auto', height: 'auto' }}
              />
              <Image 
                src="/images/top-logo2.png" 
                alt="Partner 2" 
                width={80} 
                height={40}
                style={{ margin: '0 10px', width: 'auto', height: 'auto' }}
              />
              <Image 
                src="/images/top-logo3.png" 
                alt="Partner 3" 
                width={80} 
                height={40}
                style={{ margin: '0 10px', width: 'auto', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

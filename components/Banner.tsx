'use client';

import Image from 'next/image';

export default function Banner() {
  return (
    <section className="banner-section" style={{ backgroundImage: 'url(/images/banner-bg-img.png)' }}>
      <div className="banner-wrapper">
        
        <Image 
          src="/images/banner-img.webp"
          alt="Siko Mining"
          width={1600}
          height={500}
          priority
          placeholder="blur"
          blurDataURL="/images/banner-small.jpg"
          quality={75}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover'
          }}
        />

        <div className="banner-content">
          <h1>We Support The Junior Mining Sector</h1>
          <p>Accessible & sustainable mining services that guarantee success.</p>
        </div>

      </div>
    </section>
  );
}

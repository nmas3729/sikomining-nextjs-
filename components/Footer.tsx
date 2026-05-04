import Image from 'next/image';

export default function Footer() {
  return (
    <footer 
      className="footer" 
      style={{ backgroundImage: 'url(/images/footer-bg.png)' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="footer-logo mb-4">
              <Image 
                src="/images/JAE-logo-white.png"
                alt="JAE Logo"
                width={150}
                height={50}
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <p className="text-white">
              &copy; {new Date().getFullYear()} Siko Mining. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

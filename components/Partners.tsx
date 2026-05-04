import Image from 'next/image';

export default function Partners() {
  const partners = [
    { name: 'Fungi', img: 'Fungi.jpeg' },
    { name: 'Gomo', img: 'Gomo.jpeg' },
    { name: 'Salungano Group', img: 'Salungano Group.jpeg' },
    { name: 'Tau Holdings', img: 'Tau Holdings.jpeg' },
    { name: 'TauSadi', img: 'TauSadi Mining & Engineering.jpeg' },
  ];

  return (
    <section className="partners-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Partners</h2>
        <div className="row justify-content-center align-items-center">
          {partners.map((partner) => (
            <div className="col-md-2 col-sm-4 col-6 mb-4" key={partner.name}>
              <div className="partner-logo text-center">
                <Image 
                  src={`/images/${partner.img}`}
                  alt={partner.name}
                  width={150}
                  height={100}
                  style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

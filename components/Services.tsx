import Image from 'next/image';

export default function Services() {
  const services = [
    { id: 1, img: 'services-logo1.png', title: 'Mining Consultancy' },
    { id: 2, img: 'services-logo2.png', title: 'Equipment Supply' },
    { id: 3, img: 'services-logo3.png', title: 'Project Management' },
    { id: 4, img: 'services-logo4.png', title: 'Safety Training' },
    { id: 5, img: 'services-logo5.png', title: 'Geological Services' },
    { id: 6, img: 'services-logo6.png', title: 'Environmental Compliance' },
  ];

  return (
    <section className="services-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row">
          {services.map((service) => (
            <div className="col-md-4 col-sm-6 mb-4" key={service.id}>
              <div className="service-box text-center p-4">
                <Image 
                  src={`/images/${service.img}`}
                  alt={service.title}
                  width={80}
                  height={80}
                  style={{ width: 'auto', height: 'auto', marginBottom: '20px' }}
                />
                <h3>{service.title}</h3>
                <p>Professional mining services tailored to your needs</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

export default function Team() {
  const team = [
    { id: 1, name: 'John Doe', position: 'CEO', img: 'team-img1.jpg' },
    { id: 2, name: 'Jane Smith', position: 'Operations Director', img: 'team-img2.jpg' },
  ];

  return (
    <section className="team-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Leadership Team</h2>
        <div className="row">
          {team.map((member) => (
            <div className="col-md-6 mb-4" key={member.id}>
              <div className="team-member text-center">
                <Image 
                  src={`/images/${member.img}`}
                  alt={member.name}
                  width={300}
                  height={400}
                  style={{ borderRadius: '10px', width: '100%', height: 'auto' }}
                />
                <h3 className="mt-3">{member.name}</h3>
                <p className="text-muted">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

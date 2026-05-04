export default function Stats() {
  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <section 
      className="stats-section py-5"
      style={{ backgroundImage: 'url(/images/stats-bg.png)' }}
    >
      <div className="container">
        <div className="row">
          {stats.map((stat, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className="stat-box text-center text-white">
                <h3 className="display-4">{stat.number}</h3>
                <p className="lead">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

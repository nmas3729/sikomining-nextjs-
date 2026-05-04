export default function Gallery() {
  return (
    <section className="gallery-section">
      <h2 style={{ textAlign: "center" }}>Our Gallery</h2>

      <div className="media-grid">
        <div className="media-card">
          <img src="/images/worker1.png" alt="Exploration" />
          <div className="overlay">Exploration</div>
        </div>

        <div className="media-card">
          <img src="/images/worker2.jpg" alt="Site Management" />
          <div className="overlay">Site Management</div>
        </div>

        <div className="media-card">
          <img src="/images/worker3.jpg" alt="Safety First" />
          <div className="overlay">Safety First</div>
        </div>
      </div>
    </section>
  );
}

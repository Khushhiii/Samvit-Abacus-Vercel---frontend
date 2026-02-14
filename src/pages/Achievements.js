import React from 'react';

const ACHIEVEMENTS = [
  {
    title: 'State-level selections',
    img: 'https://images.pexels.com/photos/6804610/pexels-photo-6804610.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Speed & accuracy milestones',
    img: 'https://images.pexels.com/photos/5427671/pexels-photo-5427671.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Confidence building',
    img: 'https://images.pexels.com/photos/5212322/pexels-photo-5212322.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const Achievements = () => (
  <div className="page page-achievements">
    <section className="page-hero">
      <div
        className="page-hero-bg"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/4778660/pexels-photo-4778660.jpeg)`,
        }}
      />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <h1 className="page-hero-title">Achievements</h1>
        <p className="page-hero-tagline">Student progress & competition selections</p>
      </div>
    </section>

    <section className="content-band">
      <div className="container">
        <div className="row g-4">
          {ACHIEVEMENTS.map((item) => (
            <div className="col-md-4" key={item.title}>
              <div className="img-card img-card--tall">
                <div className="img-card-bg" style={{ backgroundImage: `url(${item.img})` }} />
                <div className="img-card-overlay" />
                <div className="img-card-text">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Achievements;

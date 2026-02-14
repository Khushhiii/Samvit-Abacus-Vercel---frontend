import React from 'react';
import { Link } from 'react-router-dom';

const IMG = 'https://images.pexels.com/photos/6804094/pexels-photo-6804094.jpeg?auto=compress&cs=tinysrgb&w=1200';

const Feedback = () => (
  <div className="page page-feedback">
    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: `url(${IMG})` }} />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <h1 className="page-hero-title">Feedback & Experience</h1>
        <p className="page-hero-tagline">We listen via calls & messages.</p>
      </div>
    </section>

    <section className="content-band">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card card-pro">
              <div className="card-body text-center py-5">
                <p className="mb-3 text-dark fw-semibold">
                  Share your thoughts when you <Link to="/contact">contact</Link> or <Link to="/courses">register</Link>.
                </p>
                <p className="text-muted small mb-0">Regular check-ins · WhatsApp · Progress updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Feedback;

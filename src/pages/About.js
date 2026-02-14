import React from 'react';
import { CONTACT } from '../constants';

const IMGS = [
  'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6804095/pexels-photo-6804095.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
];

const About = () => (
  <div className="page page-about">
    {/* Hero strip */}
    <section className="page-hero">
      <div
        className="page-hero-bg"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
        }}
      />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <h1 className="page-hero-title">About {CONTACT.academyName}</h1>
        <p className="page-hero-tagline">Vijaynagar · Small batches · 9+ years</p>
      </div>
    </section>

    <section className="content-band">
      <div className="container">
        <div className="row g-4">
          {[
            { title: 'Experience', line: '9+ years focused abacus teaching.' },
            { title: 'Method', line: 'Step-by-step levels, timed practice.' },
            { title: 'Environment', line: 'Home-based, small batches.' },
          ].map((item, i) => (
            <div className="col-md-4" key={item.title}>
              <div className="img-card">
                <div className="img-card-bg" style={{ backgroundImage: `url(${IMGS[i]})` }} />
                <div className="img-card-overlay" />
                <div className="img-card-text">
                  <span className="img-card-label">{item.title}</span>
                  <span className="img-card-desc">{item.line}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="about-focus mt-5">
          <h2 className="section-heading">Focus</h2>
          <p className="section-sub">Small batches · State prep · Parent updates</p>
          <div className="row g-3 mt-2">
            {['Small batch care', 'State-level prep', 'Parent updates'].map((t) => (
              <div className="col-md-4" key={t}>
                <div className="focus-pill">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;

import React from 'react';
import { Link } from 'react-router-dom';
import { COURSE_LEVELS, CONTACT } from '../constants';

const HERO_IMG = 'https://images.pexels.com/photos/5212322/pexels-photo-5212322.jpeg?auto=compress&cs=tinysrgb&w=1600';
const BENEFIT_IMGS = [
  'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/5427671/pexels-photo-5427671.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
];
const ACTIVITY_IMGS = [
  'https://images.pexels.com/photos/6804095/pexels-photo-6804095.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4261795/pexels-photo-4261795.jpeg?auto=compress&cs=tinysrgb&w=800',
];

const Home = () => {
  return (
    <>
      {/* Hero: full-width image, short text, high contrast */}
      <section className="hero-block">
        <div className="hero-block-bg" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="hero-block-overlay" />
        <div className="hero-block-content">
          <span className="hero-badge">9+ Years · Vijaynagar</span>
          <h1 className="hero-title">Samvit Abacus Academy</h1>
          <p className="hero-tagline">Mental math, focus & confidence for every child.</p>
          <div className="hero-actions">
            <Link to="/courses" className="btn btn-hero-primary">View Courses</Link>
            <Link to="/contact" className="btn btn-hero-outline">Contact</Link>
          </div>
          <p className="hero-meta">{CONTACT.phones.join(' · ')}</p>
        </div>
      </section>

      {/* Benefits: image cards, one line each */}
      <section className="content-band">
        <div className="container">
          <h2 className="section-heading">Why Samvit</h2>
          <p className="section-sub">Speed · Focus · Confidence</p>
          <div className="row g-4">
            {['Speed & accuracy', 'Focus & memory', 'Confidence'].map((label, i) => (
              <div className="col-md-4" key={label}>
                <div className="img-card">
                  <div
                    className="img-card-bg"
                    style={{ backgroundImage: `url(${BENEFIT_IMGS[i]})` }}
                  />
                  <div className="img-card-overlay" />
                  <div className="img-card-text">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course levels: compact list + one CTA */}
      <section className="content-band content-band--alt">
        <div className="container">
          <h2 className="section-heading">Course Levels</h2>
          <p className="section-sub">Junior → Grand Master · Structured progress</p>
          <div className="row g-3">
            {COURSE_LEVELS.map((course) => (
              <div className="col-md-6 col-lg-4" key={course.title}>
                <div className="level-card">
                  <h3 className="level-card-title">{course.title}</h3>
                  <p className="level-card-sub">{course.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/courses" className="btn btn-gold px-4">Full structure & register</Link>
          </div>
        </div>
      </section>

      {/* Activities: image strip, short labels */}
      <section className="content-band">
        <div className="container">
          <h2 className="section-heading">Mind Games & Activities</h2>
          <p className="section-sub">Logic · Speed · Memory</p>
          <div className="row g-4">
            {['Logic puzzles', 'Speed drills', 'Mind games'].map((label, i) => (
              <div className="col-md-4" key={label}>
                <div className="img-card img-card--sm">
                  <div
                    className="img-card-bg"
                    style={{ backgroundImage: `url(${ACTIVITY_IMGS[i]})` }}
                  />
                  <div className="img-card-overlay" />
                  <div className="img-card-text">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-band content-band--cta">
        <div className="container text-center">
          <h2 className="section-heading section-heading--light">Ready to start?</h2>
          <p className="section-sub section-sub--light">Enquire or register — we’ll confirm timings.</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/contact" className="btn btn-hero-primary">Enquire</Link>
            <Link to="/courses" className="btn btn-hero-outline btn-hero-outline--light">Register</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

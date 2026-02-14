import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, COURSE_LEVELS } from '../constants';

const Footer = () => {
  return (
    <footer className="footer border-top border-gold">
      <div className="container py-4">
        <div className="row gy-4">
          <div className="col-md-4">
            <h5 className="text-gold fw-bold mb-3">{CONTACT.academyName}</h5>
            <p className="mb-2">Home-based academy with 9+ years of focused teaching.</p>
            <div>
              {CONTACT.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
            <div className="mt-3">
              <div className="fw-semibold">Phone</div>
              <div>{CONTACT.phones.join(' / ')}</div>
              <div className="fw-semibold mt-2">Contact Person</div>
              <div>{CONTACT.contactPerson}</div>
            </div>
          </div>

          <div className="col-md-4">
            <h6 className="text-gold fw-bold mb-3">Quick Links</h6>
            <div className="d-flex gap-3">
              <ul className="list-unstyled small mb-0">
                <li><Link className="footer-link" to="/">Home</Link></li>
                <li><Link className="footer-link" to="/about">About</Link></li>
                <li><Link className="footer-link" to="/courses">Courses</Link></li>
                <li><Link className="footer-link" to="/gallery">Gallery</Link></li>
              </ul>
              <ul className="list-unstyled small mb-0">
                <li><Link className="footer-link" to="/achievements">Achievements</Link></li>
                <li><Link className="footer-link" to="/contact">Contact</Link></li>
                <li><Link className="footer-link" to="/feedback">Feedback</Link></li>
              </ul>
            </div>
            <div className="mt-3">
              <a
                className="btn btn-gold btn-sm me-2 mb-2"
                href={CONTACT.googleMaps}
                target="_blank"
                rel="noreferrer"
              >
                View on Map
              </a>
              <a
                className="btn btn-outline-gold btn-sm mb-2"
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <h6 className="text-gold fw-bold mb-3">Course Tracks</h6>
            <ul className="list-unstyled small">
              {COURSE_LEVELS.map((course) => (
                <li key={course.title} className="mb-1">{course.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-top border-gold mt-4 pt-3 text-center small text-muted">
          © {new Date().getFullYear()} {CONTACT.academyName}. Built for parents and students in Vijaynagar, Bangalore.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

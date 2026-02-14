import React, { useState } from 'react';
import { CONTACT } from '../constants';
import api from '../api';

const initialForm = {
  student_name: '',
  parent_name: '',
  email: '',
  phone: '',
  student_age: '',
  course_interested: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setAlert(null);
    try {
      await api.post('/contact', {
      ...form,
      email: form.email || null,   // sends null if email is empty
      student_age: Number(form.student_age),
      });

      setAlert({ type: 'success', message: 'Enquiry submitted successfully!' });
      setForm(initialForm);
    } catch (error) {
      const message = error.response?.data?.message || 'Could not submit enquiry. Please try again.';
      setAlert({ type: 'danger', message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page page-contact">
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/6804075/pexels-photo-6804075.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
          }}
        />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <h1 className="page-hero-title">Contact</h1>
          <p className="page-hero-tagline">Enquiries · Batch timings · WhatsApp</p>
        </div>
      </section>

      <section className="content-band">
        <div className="container py-4">
          <div className="row g-4 align-items-start">
            <div className="col-lg-5">
              <div className="card card-pro h-100">
                <div className="card-body">
                  <h5 className="text-gold fw-bold mb-3">Visit</h5>
                  <div className="mb-3">
                    <div className="fw-semibold">{CONTACT.academyName}</div>
                    {CONTACT.addressLines.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                  <div className="mb-3">
                    <div className="fw-semibold">Phone Numbers</div>
                    {CONTACT.phones.map((phone) => (
                      <div key={phone}>{phone}</div>
                    ))}
                  </div>
                  <div className="mb-3">
                    <div className="fw-semibold">Contact Person</div>
                    <div>{CONTACT.contactPerson}</div>
                  </div>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    <a className="btn btn-gold btn-sm" href={CONTACT.whatsappLink} target="_blank" rel="noreferrer">
                      WhatsApp Chat
                    </a>
                    <a
                      className="btn btn-outline-gold btn-sm"
                      href={CONTACT.whatsappPrefilledLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Prefilled Message
                    </a>
                    <a className="btn btn-outline-gold btn-sm" href={CONTACT.googleMaps} target="_blank" rel="noreferrer">
                      Google Maps
                    </a>
                  </div>
                  <div className="ratio ratio-4x3">
                    <iframe
                      title="Google Maps"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.710196602699!2d77.53374217508361!3d12.925563787387433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d6070cfaf93%3A0xc2e48e6b59d4314!2sVijayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="card card-pro">
                <div className="card-body">
                  <h5 className="text-gold fw-bold mb-3">Enquiry</h5>
                  {alert && (
                    <div className={`alert alert-${alert.type}`} role="alert">
                      {alert.message}
                    </div>
                  )}
                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                      <label className="form-label">Student Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="student_name"
                        value={form.student_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Parent Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="parent_name"
                        value={form.parent_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email (optional)</label>
                      <input
                       type="email"
                       className="form-control"
                        name="email"
                        value={form.email}
                       onChange={handleChange}
                      />

                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Student Age*</label>
                      <input
                        type="number"
                        min="3"
                        className="form-control"
                        name="student_age"
                        value={form.student_age}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Course Interested*</label>
                      <select
                        className="form-select"
                        name="course_interested"
                        value={form.course_interested}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="Junior Module">Junior Module</option>
                        <option value="Foundation Levels 1-4">Foundation Levels 1-4</option>
                        <option value="Advanced Levels 5-8">Advanced Levels 5-8</option>
                        <option value="Grand Master Levels 9-11">Grand Master Levels 9-11</option>
                        <option value="Mind Games & Brain Boosting">Mind Games & Brain Boosting</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message*</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-gold" disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Submit Enquiry'}
                      </button>
                      <a
                        className="btn btn-outline-gold ms-3"
                        href={`${CONTACT.whatsappLink}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

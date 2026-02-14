import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import { COURSE_LEVELS } from '../constants';
import api from '../api';

const initialForm = {
  student_name: '',
  parent_name: '',
  email: '',
  phone: '',
  course_level: '',
  student_age: '',
  address: '',
  previous_experience: '',
};

const Courses = () => {
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
      await api.post('/contact/register', {
        ...form,
        student_age: Number(form.student_age),
      });
      setAlert({ type: 'success', message: 'Registration submitted successfully!' });
      setForm(initialForm);
    } catch (error) {
      const message = error.response?.data?.message || 'Could not submit registration. Please try again.';
      setAlert({ type: 'danger', message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page page-courses">
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/4778660/pexels-photo-4778660.jpeg)`,
          }}
        />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <h1 className="page-hero-title">Course Structure</h1>
          <p className="page-hero-tagline">Junior → Grand Master · Mind-boosting activities</p>
        </div>
      </section>

      <section className="content-band">
        <div className="container py-4">
          <div className="row g-4 mb-4">
            {COURSE_LEVELS.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>

          <div className="card card-pro">
            <div className="card-body">
              <div className="row g-4 align-items-start">
                <div className="col-lg-5">
                  <h3 className="text-gold fw-bold mb-2">Register</h3>
                  <p className="text-muted small mb-2">Share details · We confirm timings.</p>
                  <p className="small text-muted mb-0">Small/one-on-one · Pricing on request · WhatsApp confirm</p>
                </div>
                <div className="col-lg-7">
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
                        required
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
                        className="form-control"
                        name="student_age"
                        min="3"
                        value={form.student_age}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Course Level*</label>
                      <select
                        className="form-select"
                        name="course_level"
                        value={form.course_level}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select level</option>
                        <option value="Junior Module">Junior Module</option>
                        <option value="Foundation Level 1">Foundation Level 1</option>
                        <option value="Foundation Level 2">Foundation Level 2</option>
                        <option value="Foundation Level 3">Foundation Level 3</option>
                        <option value="Foundation Level 4">Foundation Level 4</option>
                        <option value="Advanced Level 5">Advanced Level 5</option>
                        <option value="Advanced Level 6">Advanced Level 6</option>
                        <option value="Advanced Level 7">Advanced Level 7</option>
                        <option value="Advanced Level 8">Advanced Level 8</option>
                        <option value="Grand Master Level 9">Grand Master Level 9</option>
                        <option value="Grand Master Level 10">Grand Master Level 10</option>
                        <option value="Grand Master Level 11">Grand Master Level 11</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Address*</label>
                      <textarea
                        className="form-control"
                        rows="2"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Previous Experience (optional)</label>
                      <textarea
                        className="form-control"
                        rows="2"
                        name="previous_experience"
                        value={form.previous_experience}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-gold" disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Submit Registration'}
                      </button>
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

export default Courses;

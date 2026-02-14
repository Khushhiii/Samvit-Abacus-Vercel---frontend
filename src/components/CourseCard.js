import React from 'react';

const CourseCard = ({ title, subtitle, items }) => (
  <div className="col-md-6 col-lg-4">
    <div className="card course-card h-100 bg-card border border-gold">
      <div className="card-body">
        <h5 className="card-title text-gold fw-bold">{title}</h5>
        <p className="card-subtitle text-muted small mb-3">{subtitle}</p>
        <ul className="small ps-3 mb-0">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default CourseCard;

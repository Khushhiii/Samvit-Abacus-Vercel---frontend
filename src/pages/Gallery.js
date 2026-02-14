import React from 'react';
/*
const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg', '/img5.jpg', '/img6.jpg', '/img7.jpg','/img8.jpg','/img9.jpg','/img10.jpg','/img11.jpg'];

const Gallery = () => (
  <div className="page page-gallery">
    <section className="page-hero page-hero--short">
      <div
        className="page-hero-bg"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/4261795/pexels-photo-4261795.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
        }}
      />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <h1 className="page-hero-title">Gallery</h1>
        <p className="page-hero-tagline">Learning environment & activities</p>
      </div>
    </section>

    <section className="content-band">
      <div className="container py-4">
        <div className="gallery-grid">
          {images.map((src, idx) => (
            <figure className="gallery-item" key={idx}>
              <div
                className="gallery-image-wrapper"
                style={{
                  height: '350px',        // ✅ increased height
                  overflow: 'hidden',
                }}
              >
                <img
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  className="gallery-image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',   // ✅ keeps image proportional
                  }}
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Gallery;
*/


const images = [
  '/img1.jpg.jpeg',
  '/img2.jpg.jpeg',
  '/img3.jpg.jpeg',
  '/img4.jpg.jpeg',
  '/img5.jpg.jpeg',
  '/img6.jpg.jpeg',
  '/img7.jpg.jpeg',
  '/img8.jpg.jpeg',
  '/img9.jpg.jpeg',
  '/img10.jpg.jpeg',
  '/img11.jpg.png',
  '/img12.jpg.jpeg',
];

const Gallery = () => (
  <div className="page page-gallery">
    <section className="page-hero page-hero--short">
      <div
        className="page-hero-bg"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/4778660/pexels-photo-4778660.jpeg)',
        }}
      />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <h1 className="page-hero-title">Gallery</h1>
        <p className="page-hero-tagline">Learning environment & activities</p>
      </div>
    </section>

    <section className="content-band">
      <div className="container py-4">
        <div className="gallery-grid">
          {images.map((src, idx) => (
            <figure className="gallery-item" key={idx}>
              <div
                className="gallery-image-wrapper"
                style={{
                  height: '350px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="gallery-image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Gallery;

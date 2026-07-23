'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import CtaSection from '../_components/CtaSection';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

const GALLERY_ITEMS = [
  { image: '/images/gallery-classroom.jpg', title: 'Main Classroom', categories: ['classrooms'] },
  {
    image: '/images/gallery-graduation.jpg',
    title: 'Graduation Ceremony 2024',
    categories: ['events', 'farewell'],
  },
  {
    image: '/images/gallery-australia-bound.jpg',
    title: 'Australia-Bound Students',
    categories: ['events', 'farewell'],
  },
  {
    image: '/images/gallery-japan-class.jpg',
    title: 'Japan Language Class',
    categories: ['classrooms'],
  },
  {
    image: '/images/gallery-computer-lab.jpg',
    title: 'Computer Lab Session',
    categories: ['classrooms'],
  },
  {
    image: '/images/gallery-ielts.jpg',
    title: 'IELTS Preparation Class',
    categories: ['classrooms'],
  },
  {
    image: '/images/gallery-awards.jpg',
    title: 'Achievement Award Ceremony',
    categories: ['events'],
  },
  { image: '/images/gallery-seminar.jpg', title: 'Study Abroad Seminar', categories: ['events'] },
  {
    image: '/images/gallery-orientation.jpg',
    title: 'Orientation Programme',
    categories: ['events'],
  },
];

export default function PageContent() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null); // { items, index }

  const visibleItems = useMemo(
    () => GALLERY_ITEMS.filter((item) => filter === 'all' || item.categories.includes(filter)),
    [filter]
  );

  function openItem(item) {
    let album;
    if (filter !== 'all') {
      album = visibleItems;
    } else {
      const primary = item.categories[0];
      album = GALLERY_ITEMS.filter((i) => i.categories.includes(primary));
    }
    const index = Math.max(0, album.indexOf(item));
    setLightbox({ items: album, index });
  }

  function closeLightbox() {
    setLightbox(null);
  }

  function showAdjacent(direction) {
    setLightbox((prev) => {
      if (!prev) return prev;
      const len = prev.items.length;
      return { ...prev, index: (prev.index + direction + len) % len };
    });
  }

  useEffect(() => {
    if (!lightbox) return undefined;
    document.body.classList.add('gallery-lightbox-open');
    function onKeyDown(e) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showAdjacent(-1);
      if (e.key === 'ArrowRight') showAdjacent(1);
    }
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('gallery-lightbox-open');
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [lightbox]);

  const activeImage = lightbox ? lightbox.items[lightbox.index] : null;

  return (
    <>
      <Header />

      <div className="ann-bar" id="annBar">
        🎓 <strong>Admissions Open 2026!</strong> Free Counselling for Australia, UK, USA & Japan.
        <a href="/contact">Book Now</a> — Limited Seats!
        <button
          type="button"
          className="ann-close"
          aria-label="Dismiss announcement"
          onClick={(e) => {
            e.currentTarget.parentElement.style.display = 'none';
          }}
        >
          ✕
        </button>
      </div>

      <div className="top-bar">
        <div className="container">
          <div className="top-bar-inner">
            <div className="top-bar-left">
              <a href="tel:+977-9851158991">
                <i className="fas fa-phone"></i>+977-9851158991
              </a>
              <a href="tel:+977-1-4377050">
                <i className="fas fa-phone"></i>+977-1-4377050
              </a>
              <a href="mailto:info@oxfordeducation.com.np">
                <i className="fas fa-envelope"></i>info@oxfordeducation.com.np
              </a>
              <span>
                <i className="fas fa-map-marker-alt"></i>Sukedhara Chowk, Kathmandu, Nepal
              </span>
            </div>
            <div className="top-bar-right">
              <span>
                <i className="fas fa-clock"></i>Sun–Fri: 9AM–5PM
              </span>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/Oxford-International-Education-Centre-Consultancy-PLtd-1621969181419777/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.youtube.com/watch?v=LZaV-QDBQwQ" target="_blank">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span className="sep">›</span>
            <span>Gallery</span>
          </div>
          <h1>
            Photo <span>Gallery</span>
          </h1>
          <p>
            Glimpses of life at Oxford International — from classroom sessions and counselling
            events to student farewell ceremonies and campus activities.
          </p>
        </div>
      </div>

      <section className="u-bg-white section-pad">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Our Campus</div>
            <h2 className="section-title">
              Life at <span>Oxford International</span>
            </h2>
            <div className="divider divider-center"></div>
            <p className="section-sub">
              Take a look inside our institute at Sukedhara Chowk, Kathmandu — modern classrooms,
              dedicated counselling rooms, and a vibrant student community.
            </p>
          </div>
          <div className="gallery-filters">
            <button
              className={`gallery-filter${filter === 'all' ? ' active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Photos
            </button>
            <button
              className={`gallery-filter${filter === 'classrooms' ? ' active' : ''}`}
              onClick={() => setFilter('classrooms')}
            >
              Classrooms
            </button>
            <button
              className={`gallery-filter${filter === 'events' ? ' active' : ''}`}
              onClick={() => setFilter('events')}
            >
              Student Events
            </button>
            <button
              className={`gallery-filter${filter === 'farewell' ? ' active' : ''}`}
              onClick={() => setFilter('farewell')}
            >
              Farewell
            </button>
          </div>
          <div className="gallery-grid">
            {visibleItems.map((item) => (
              <div
                className="gallery-item"
                key={item.image}
                role="button"
                tabIndex={0}
                onClick={() => openItem(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openItem(item);
                  }
                }}
              >
                <div
                  className="gallery-inner"
                  style={{ background: `url('${item.image}') center/cover no-repeat` }}
                >
                  <div className="gallery-overlay">
                    <i className="fas fa-expand"></i>
                  </div>
                </div>
                <div className="gallery-label">{item.title}</div>
              </div>
            ))}
          </div>
          <div className="u-txt-c-mt40">
            <a
              href="https://www.youtube.com/watch?v=LZaV-QDBQwQ"
              target="_blank"
              className="btn btn-primary"
            >
              <i className="fab fa-youtube"></i>Watch Our Video on YouTube
            </a>
          </div>
        </div>
      </section>

      <div
        className={`gallery-lightbox${lightbox ? ' open' : ''}`}
        id="galleryLightbox"
        aria-hidden={!lightbox}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeLightbox();
        }}
      >
        <button
          className="gallery-lightbox-close"
          type="button"
          aria-label="Close gallery preview"
          onClick={closeLightbox}
        >
          <i className="fas fa-times"></i>
        </button>
        <button
          className="gallery-lightbox-nav gallery-lightbox-prev"
          type="button"
          aria-label="Previous image"
          onClick={() => showAdjacent(-1)}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div
          className="gallery-lightbox-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="galleryLightboxTitle"
        >
          {activeImage && (
            <Image
              src={activeImage.image}
              alt={activeImage.title}
              id="galleryLightboxImg"
              width={980}
              height={640}
            />
          )}
          <div className="gallery-lightbox-caption">
            <span id="galleryLightboxTitle">{activeImage ? activeImage.title : ''}</span>
            <span id="galleryLightboxCount">
              {lightbox ? `${lightbox.index + 1} / ${lightbox.items.length}` : ''}
            </span>
          </div>
        </div>
        <button
          className="gallery-lightbox-nav gallery-lightbox-next"
          type="button"
          aria-label="Next image"
          onClick={() => showAdjacent(1)}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <CtaSection
        title="Visit Our Campus in Kathmandu!"
        text="Come see our facilities — Sukedhara Chowk, Kathmandu. Near Ring Road."
        actions={[
          {
            href: '/contact',
            icon: 'fas fa-map-marker-alt',
            label: 'Get Directions',
            variant: 'white',
          },
          {
            href: '/contact',
            icon: 'fas fa-calendar-check',
            label: 'Book Visit',
            variant: 'outline',
          },
        ]}
      />

      <Footer />
    </>
  );
}

import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';
import WaitlistPopup from './WaitlistPopup';
import './AboutUs.css';

const faqs = [
  {
    q: 'What is LawVriksh?',
    a: "LawVriksh is India’s first platform for lawyers, law students, and legal minds to write, publish, and share their expertise with the wider community.",
  },
  {
    q: 'Who can join LawVriksh?',
    a: 'Any lawyer, law student, researcher, or legal enthusiast can join and start contributing.',
  },
  {
    q: 'Is LawVriksh free to use?',
    a: 'Yes, joining the beta is completely free. You can create your profile and start writing immediately.',
  },
  {
    q: 'How is LawVriksh different from LinkedIn or Medium?',
    a: 'Unlike general platforms, LawVriksh is focused entirely on the legal community. Every post, feature, and tool is designed to highlight your legal expertise and build credibility.',
  },
  {
    q: 'Do I need prior writing experience?',
    a: 'Not at all. LawVriksh makes publishing simple — whether you’re sharing a case note, research insight, or practical legal experience.',
  },
];

export default function AboutUs() {
  const [isWaitlistPopupOpen, setIsWaitlistPopupOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="about">
      <Navbar />

      <main className="about__container">
        {/* Hero */}
        <section className="about__hero">
          <div className="about__hero-content">
            <h1 className="about__title">LawVriksh — Where Legal Knowledge Grows and Spreads.</h1>
            <p className="about__subtitle">
              LawVriksh is India’s first dedicated platform for lawyers, law students, and legal minds to write, publish, and share their expertise. We believe legal knowledge should not stay locked inside courtrooms, classrooms, or personal notes — it should grow, branch out, and inspire the entire legal ecosystem.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="about__section">
          <div className="about__section-content">
            <h2>Our Story</h2>
            <p>
              The word <strong>“Vriksh”</strong> means <em>tree</em> in Sanskrit. Just like a tree provides shade, fruits, and oxygen, <strong>LawVriksh was created to nurture and spread the wisdom of law.</strong>
            </p>
            <ul>
              <li>Lawyers gain visibility by sharing their experience.</li>
              <li>Law students and academics build credibility by publishing insights.</li>
              <li>The larger community benefits from accessible, high-quality legal knowledge.</li>
            </ul>
            <p>
              LawVriksh was born out of a simple observation: <strong>India lacks a central space where legal voices can express themselves freely and be discovered.</strong> Our mission is to fill that gap.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="about__section">
          <div className="about__section-content">
            <h2>Our Mission 🌱</h2>
            <p>At <strong>LawVriksh</strong>, our mission is clear:</p>
            <ul>
              <li>To <strong>empower every legal voice</strong> — from senior advocates to first-year law students.</li>
              <li>To make <strong>legal writing accessible, discoverable, and impactful</strong>.</li>
              <li>To create a <strong>community-first platform</strong> that values authenticity, credibility, and collaboration.</li>
            </ul>
          </div>
        </section>

        {/* Why LawVriksh */}
        <section className="about__section">
          <div className="about__section-content">
            <h2>Why LawVriksh?</h2>
            <ul>
              <li>🖋️ <strong>For Lawyers</strong>: Build authority, share insights, and attract opportunities.</li>
              <li>📚 <strong>For Legal Minds</strong>: Learn, write, and get recognized for your ideas.</li>
              <li>🌐 <strong>For the Legal Community</strong>: Access a growing forest of knowledge in one place.</li>
            </ul>
          </div>
        </section>

        {/* Future */}
        <section className="about__section">
          <div className="about__section-content">
            <h2>The Future We Imagine</h2>
            <p>
              We see <strong>LawVriksh as a living ecosystem</strong> where knowledge grows like a tree, branches connect people, and ideas bear fruit for the legal profession and society at large.
            </p>
            <p>
              We invite you to be part of this journey. Whether you’re a seasoned lawyer, a budding law student, or simply passionate about the legal world — <strong>LawVriksh is your platform to share, learn, and grow.</strong>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="about__cta">
          <h3>👉 Join the LawVriksh Beta today and plant your first seed of knowledge.</h3>
          <Button onClick={() => setIsWaitlistPopupOpen(true)}>
            Start Writing
          </Button>
        </section>

        {/* FAQ */}
        <section className="about__section">
          <div className="about__section-content">
            <h2>❓ Frequently Asked Questions</h2>
            <div className="about__faq">
              {faqs.map((item, idx) => (
                <div key={idx} className={`faq-item ${openIndex === idx ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => toggleFaq(idx)} aria-expanded={openIndex === idx}>
                    {item.q}
                    <span className="faq-icon" aria-hidden>{openIndex === idx ? '−' : '+'}</span>
                  </button>
                  {openIndex === idx && (
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WaitlistPopup isOpen={isWaitlistPopupOpen} onClose={() => setIsWaitlistPopupOpen(false)} />
    </div>
  );
}


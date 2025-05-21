import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      <p className="about-text">
        Welcome to our platform! We are dedicated to connecting developers and tech enthusiasts through
        engaging events, workshops, and conferences. Our mission is to foster learning, collaboration,
        and innovation in the tech community.
      </p>

      <h2>Our Vision</h2>
      <p className="about-text">
        To be the leading hub for tech events where ideas flourish and connections thrive, empowering
        individuals to grow professionally and personally.
      </p>

      <h2>What We Offer</h2>
      <ul className="about-list">
        <li>High-quality tech conferences and workshops</li>
        <li>Networking opportunities with industry leaders</li>
        <li>Resources and support for continuous learning</li>
        <li>Community-driven events and initiatives</li>
      </ul>

      <h2>Contact Us</h2>
      <p className="about-text">
        Have questions? Feel free to reach out via our <a href="/contact">Contact page</a>.
      </p>
    </div>
  );
};

export default About;

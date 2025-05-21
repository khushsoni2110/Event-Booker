import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../components/BookingForm.css';
import { useAuth } from './AuthContext'; // adjust the path if needed

const BookingForm = ({ eventId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth(); // get login status

  // Redirect and toast if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      toast.warn('Please log in to book your ticket!', {
        position: 'top-center',
        autoClose: 2000,
      });
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  const handleShowQR = () => setShowQR(true);
  const handlePrint = () => window.print();

  return (
    <div className="booking-form">
      <h3>Book Your Seat</h3>

      {!success && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Book Now</button>
        </form>
      )}

      {success && !showQR && (
        <>
          <p className="success">Booking successful! Check your email.</p>
          <button onClick={handleShowQR}>View Ticket (QR Code)</button>
        </>
      )}

      {showQR && (
        <div className="qr-section" style={{ marginTop: '20px' }}>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=FakeTicket12345"
            alt="Fake QR Code"
            style={{ display: 'block', marginBottom: '10px' }}
          />
          <button onClick={handlePrint}>Print Ticket</button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;

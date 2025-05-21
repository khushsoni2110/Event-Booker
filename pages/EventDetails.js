// src/pages/EventDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

const eventData = {
  1: {
    title: 'React Conference 2025',
    description: 'Join us at React Conf 2025, the official gathering of the React community, where developers, engineers, and tech leaders from around the world come together to explore the future of React and modern front-end development.',
  },
  2: {
    title: 'Tech Expo 2025',
    description: 'Everything you need to know about Tech Expo.',
  },
  3: {
    title: 'PHP 8 Conference',
    description: 'Join us and explore things with PHP8'
  },
  4: {
    title: 'Mongodb Exibition',
    description: 'Join us and explore things with Mongodb'
  }
};

const EventDetails = () => {
  const { id } = useParams();
  const event = eventData[id];

  if (!event) return <p>Event not found</p>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <BookingForm eventId={id} />
    </div>
  );
};

export default EventDetails;

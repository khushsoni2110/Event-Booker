// src/components/EventList.js
import React from 'react';
import EventCard from './EventCard';

const events = [
  {
    id: 1,
    title: 'React Conference 2025',
    date: '2025-06-15',
    location: 'Gujarat, India',
    description: 'Learn about the latest in React and frontend development.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*kXtME2_vNcz1qluraWcqKg.jpeg'
  },
  {
    id: 2,
    title: 'Tech Expo 2025',
    date: '2025-07-10',
    location: 'India',
    description: 'Explore upcoming technologies and network with experts.',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQGEyHAyEBMIyg/feedshare-shrink_800/B4DZPzjcTkGUAk-/0/1734958010271?e=2147483647&v=beta&t=txQgkPl_tFLPK-ys8dGymXJ2CeVdYJsw91zkqwYOptc'
  },
  {
    id: 3,
    title: 'Php 8 Conference',
    date: '2025-07-10',
    location: 'India',
    description: 'Explore Php and its uses with us live on .',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCpP1NXrWKaW4RMyvbBOKg5LIdOViX3Hd1uA&s'
  },
   {
    id: 4,
    title: 'Mongodb Exibition 2025',
    date: '2025-04-23',
    location: 'Dehli,India',
    description: 'Explore Php and its uses with us live on .',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgnvkjs1Z54zRrLxQfD2PaEhgi1k5ej3DFA&s'
  }
];


const EventList = () => {
  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;

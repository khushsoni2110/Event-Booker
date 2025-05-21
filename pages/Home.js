import EventList from '../components/EventList';

const Home = () => {
  return (
    <div>
    <div className='banner'>
  <img src="banner3.jpg" alt="banner" style={{ width: '100%', height: '60vh' }} />
    </div>
      <h1>Upcoming Events</h1>
      <EventList />
    </div>
  );
};

export default Home;

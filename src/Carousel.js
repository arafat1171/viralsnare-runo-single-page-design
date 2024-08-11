import React, { useState } from 'react';

const Carousel = () => {
  const people = [
    { name: 'John Bradshaw', role: 'Senior Advisor', image: require('./images/john.png') },
    { name: 'Nick Powel', role: 'Leader', image: './src/images/Nick.jpg' },
    { name: 'Elizabeth Layla', role: 'Designer', image: './src/images/Layla.jpg' },
    { name: 'Paul Walker', role: 'Director', image: './src/images/paul.jpg' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPerson = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  const prevPerson = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
  };

  return (
    <div className="carousel">
      <div className="person">
        <img src={people[currentIndex].image} alt={people[currentIndex].name} />
        <h2>{people[currentIndex].name}</h2>
        <p>{people[currentIndex].role}</p>
      </div>
      <div className="navigation">
        <button onClick={prevPerson}>Prev</button>
        <button onClick={nextPerson}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Fetch random greeting from the API
    axios.get('http://localhost:3000/api/greetings/random')
      .then(response => setGreeting(response.data.greeting))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;

import React from 'react';
import * as Theme from '@theme';

/* TODO:
1. Center Card component within the #home.
2. Display user's full name and their email. Use UserProvider's functionality (see providers.js)
3. Display user's masked phone number, and implement a way to unmask it. Use UserProvider's context.
*/

const Card = () => {
  return (
    <div id="card">
      ...
    </div>
  ); 
}

const homeStyle = {
  backgroundColor: Theme.colors.beige,
  width: '100vw',
  height: '100vh',
};

const Home = () => {
  return (
    <div id="home" style={homeStyle}>
      <Card />
    </div>
  );
}

export default Home;

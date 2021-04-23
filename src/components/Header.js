import React from 'react';
import Stats from './Stats.js';
import Stopwatch from './Stopwatch.js';

const Header = ({ title }) => {
    return (
      <header>
        <Stats />
        <h1>{ title }</h1>
        <Stopwatch />
      </header>
    );
  }



  Header.defaultProps = {
    title: 'Scoreboard'
  };

  export default Header;
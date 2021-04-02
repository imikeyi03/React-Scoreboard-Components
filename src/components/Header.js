import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats.js';
import Stopwatch from './Stopwatch.js';

const Header = ({ players, title }) => {
    return (
      <header>
        <Stats players = {players} />
        <h1>{ title }</h1>
        <Stopwatch />
      </header>
    );
  }


  Header.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
  }

  Header.defaultProps = {
    title: 'Catan Scoreboard'
  };

  export default Header;
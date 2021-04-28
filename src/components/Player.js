import React, { PureComponent } from 'react';
import Icon from './Icon';
import PropTypes from 'prop-types';
import { Consumer } from './Context'
import Counter from './Counter';

class Player extends PureComponent  {
  
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    score: PropTypes.number.isRequired,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  };
  
  render() {
    const {
      name,
      id,
      score,
      index,
    } = this.props;
    
    console.log(name + ' rendered');
    return (
      <div className="player">
        <Consumer>
          {context => (
             <span className="player-name">
             <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
             <Icon isHighScore={this.props.isHighScore} />
             { name }
           </span>
          )}
        </Consumer>
  
        <Counter 
          score={score}
          index={index} 
          />
      </div>
    );
  }
}

  export default Player;
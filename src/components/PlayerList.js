import React from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = ({players, getHighScore, changeScore, removePlayer}) => {
  return (
    <Consumer>
      { context => (
           <div>
            {context.map((player, index) =>
              <Player
                index={index}
                key={player.id.toString()}
                id={player.id}
                name={player.name}
                score={player.score}
                changeScore={changeScore}
                removePlayer={removePlayer}
                isHighScore={getHighScore() === player.score}
              />
            )}
         </div>
      )}
    </Consumer>
 
  );
};

export default PlayerList;
import React from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = () => {
  return (
    <Consumer>
      { context => (
           <React.Fragment>
            {context.players.map((player, index) =>
              <Player
                {...player}
                index={index}
                key={player.id.toString()}
                id={player.id}
                name={player.name}
                score={player.score}
                isHighScore={context.actions.getHighScore() === player.score}
              />
            )}
         </React.Fragment>
      )}
    </Consumer>
 
  );
};

export default PlayerList;
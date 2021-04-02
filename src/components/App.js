import React from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

  

class App extends React.Component {
  state = {
    players: [
      {
        name: "Mikey",
        score: 0,
        id: 1
      },
      {
        name: "Lily",
        score: 0,
        id: 2
      },
      {
        name: "Taylor",
        score: 0,
        id: 3
      },
      {
        name: "Kato",
        score: 0,
        id: 4
      }
    ]
  };

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score )
    const getHighScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  }


  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
    console.log('index: ' + index, 'delta: ' + delta);
  }

  //player id counter
  prevPlayerId = 4;


  handleAddPlayer = (name) => {
    this.setState( prevState => { 
      return {
        players: [
          ...prevState.players,
          {
            name, // ES6 shortcut with the same key value name can be written as just name
            score: 0,
            id: this.prevPlayerId += 1 
          }
        ]
      };
    });
  }



  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    const highScore = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange} 
            removePlayer={this.handleRemovePlayer} 
            isHighScore= {highScore === player.score}          
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;

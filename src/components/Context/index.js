import React, { Component } from 'react';

// Create an access variable for the React.createContext Method
const ScoreboardContent = React.createContext();

// Export the Provider and Consumer to be used in our app
export class Provider extends Component {

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
        const scores = this.state.players.map( p => p.score );
        const highScore = Math.max(...scores);
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
        return (
            <ScoreboardContext.Provider value={{
                players: this.state.players,
                actions: {
                  changeScore: this.handleScoreChange,
                  removePlayer: this.handleRemovePlayer,
                  addPlayer: this.handleAddPlayer,
                  getHighScore: this.getHighScore
                }
              }}>
                  { this.props.children }
            </ScoreboardContext.Provider> 
        );
    }
}
export const Consumer = ScoreboardContent.Consumer;
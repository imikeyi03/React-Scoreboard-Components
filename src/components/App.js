import React from 'react';
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';

  

class App extends React.Component {
 

 

  render() {
    
    return (
        <div className="scoreboard">
          <Header />

          <PlayerList
            changeScore={this.handleScoreChange}
            getHighScore={this.getHighScore}
          />

          <AddPlayerForm />
        </div>
      
    );
  }
}

export default App;

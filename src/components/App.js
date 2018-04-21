import React, { Component } from 'react';
import IdeaForm from './IdeaForm';
import IdeaList from './IdeaList';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideasArray: []
    }

    this.updateCurrIdea = this.updateCurrIdea.bind(this)
  }

  updateCurrIdea(title, body) {
    const cardId = Date.now();
    const newIdea = {cardId, title, body};
    const updatedIdeasArray = [...this.state.ideasArray, newIdea];

    this.setState({
      ideasArray: updatedIdeasArray
    })
  }

  render() {
    return (
      <div className="App">
        <IdeaForm 
          updateCurrIdea={this.updateCurrIdea}
        />
        <IdeaList 
          ideasArray={this.state.ideasArray}
        />
      </div>
    );
  }
}

export default App;

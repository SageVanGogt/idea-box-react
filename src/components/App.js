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

    this.addToIdeaList = this.addToIdeaList.bind(this)
  }

  componentDidMount() {
    const localIdeas = [];

    for (let i = 0; i < localStorage.length; i++) { 
      let getIdeas = localStorage.getItem(localStorage.key(i)); 
      let parsedIdea = JSON.parse(getIdeas);
      localIdeas.push(parsedIdea);
    }

    if(localIdeas) {
      this.setState({
        ideasArray: localIdeas
      });
    }
  }

  addToIdeaList(title, body) {
    const cardId = Date.now();
    const newIdea = {cardId, title, body};
    const updatedIdeasArray = [...this.state.ideasArray, newIdea];

    this.setState({
      ideasArray: updatedIdeasArray
    })

    this.sendToLocalStorage(newIdea)
  }

  sendToLocalStorage(ideaObj) {
    localStorage.setItem(ideaObj.cardId, JSON.stringify(ideaObj));
  }

  render() {
    return (
      <div className="App">
        <IdeaForm 
          addToIdeaList={this.addToIdeaList}
        />
        <IdeaList 
          ideasArray={this.state.ideasArray}
        />
      </div>
    );
  }
}

export default App;

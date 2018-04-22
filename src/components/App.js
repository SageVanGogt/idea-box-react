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

    this.addToIdeaList = this.addToIdeaList.bind(this);
    this.editCardText = this.editCardText.bind(this);
    this.fetchLocalIdeas = this.fetchLocalIdeas.bind(this);
    this.removeIdea = this.removeIdea.bind(this);
  }

  componentDidMount() {
    this.fetchLocalIdeas();
  }

  fetchLocalIdeas() {
    const localIdeas = [];

    for (let i = 0; i < localStorage.length; i++) { 
      let getIdeas = localStorage.getItem(localStorage.key(i)); 
      let parsedIdea = JSON.parse(getIdeas);
      localIdeas.push(parsedIdea);
    }

    if(localIdeas) {
      this.handleStateChange(localIdeas);
    }
  }

  handleStateChange(ideasArray) {
    this.setState({
      ideasArray
    });
  }

  addToIdeaList(title, body) {
    const cardId = Date.now();
    const newIdea = {cardId, title, body};
    const updatedIdeasArray = [...this.state.ideasArray, newIdea];

    this.handleStateChange(updatedIdeasArray);
    this.sendToLocalStorage(newIdea);
  }

  removeIdea(cardIdToDelete) {
    const updatedIdeasArray = this.state.ideasArray.filter(ideaCard => {
      return ideaCard.cardId !== cardIdToDelete;
    });

    this.handleStateChange(updatedIdeasArray);
    localStorage.removeItem(cardIdToDelete);
  }

  sendToLocalStorage(ideaObj) {
    localStorage.setItem(ideaObj.cardId, JSON.stringify(ideaObj));
  }

  getFromLocalStorage(id) {
    const localIdeaCard = localStorage.getItem(id);
    const parsedIdeaCard = JSON.parse(localIdeaCard);
    return parsedIdeaCard;
  }

  editCardText(event, id, location) {
    const {textContent} = event.target;
    const currIdeaCard = this.getFromLocalStorage(id);

    currIdeaCard[location] = textContent;
    this.sendToLocalStorage(currIdeaCard);
  }

  render() {
    return (
      <div className="App">
        <IdeaForm 
          addToIdeaList={this.addToIdeaList}
        />
        <IdeaList 
          ideasArray={this.state.ideasArray}
          editCardText={this.editCardText}
          removeIdea={this.removeIdea}
        />
      </div>
    );
  }
}

export default App;

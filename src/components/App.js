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
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
    this.handleQualityChange = this.handleQualityChange.bind(this);
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

  addToIdeaList(title, body, quality = 'swill') {
    const cardId = Date.now();
    const newIdea = {cardId, title, body, quality};
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

  handleQualityChange(cardId, button) {
    const qualityArray = ['swill', 'plausible', 'genius'];
    const currCard = this.getFromLocalStorage(cardId);
    const currQuality = currCard.quality;
    const currIndex = qualityArray.indexOf(currQuality);
    const currIndexInIdeasArray = this.state.ideasArray
      .map(idea => idea.cardId).indexOf(cardId);
    const updatedIdeasArray = this.state.ideasArray;

    if(button === 'up' && currIndex < 2) {
      let newQuality = qualityArray[currIndex + 1]
      currCard.quality = newQuality;
      updatedIdeasArray[currIndexInIdeasArray].quality = newQuality;
    } else if (button === 'down' && currIndex > 0) {
      let newQuality = qualityArray[currIndex - 1]
      currCard.quality = newQuality; 
      updatedIdeasArray[currIndexInIdeasArray].quality = newQuality;      
    }

    this.handleStateChange(updatedIdeasArray);
    this.sendToLocalStorage(currCard);
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
          handleQualityChange={this.handleQualityChange}
        />
      </div>
    );
  }
}

export default App;

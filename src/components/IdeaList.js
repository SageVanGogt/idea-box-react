import React from 'react';
import IdeaCard from './IdeaCard';
import './styles/IdeaList.css';

const IdeaList = (props) => {
  const ideasToCards = props.ideasArray.map(idea => {
    return (
      <IdeaCard 
        idea={idea}
        editCardText={props.editCardText}
        removeIdea={props.removeIdea}
        handleQualityChange={props.handleQualityChange}
      />
    )
  })
  return (
    <div className="idea-list">
      {ideasToCards}
    </div>
  )
}

export default IdeaList;
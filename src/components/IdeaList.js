import React from 'react';
import IdeaCard from './IdeaCard';
import './styles/IdeaList.css';

const IdeaList = ({ideasArray}) => {
  const ideasToCards = ideasArray.map(idea => {
    return (
      <IdeaCard 
        props={idea}
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
import React from 'react';
import './styles/IdeaCard.css';

const IdeaCard = (props) => {
  const {idea, editCardText, removeIdea, handleQualityChange} = props;

  return(
    <div className="idea-card" id={idea.cardId}>
      <h2 className="idea-name" onBlur={(event) => editCardText(event, idea.cardId, 'title')} contentEditable>{idea.title}</h2>
      <p className="idea-body" onBlur={(event) => editCardText(event, idea.cardId, 'body')} contentEditable>{idea.body}</p>
      <button className="idea-delete" onClick={() => removeIdea(idea.cardId)}>delete</button>
      <div className="idea-quality">
        <img src="" alt=""/>
        <img src="" alt=""/>
        <button className="down-btn" onClick={() => handleQualityChange(idea.cardId, 'down')}>downvote</button>
        <button className="up-btn" onClick={() => handleQualityChange(idea.cardId, 'up')}>upvote</button>
        <h4 className="idea-quality">Quality: {idea.quality}</h4>
      </div>
    </div>
  );
}

export default IdeaCard;
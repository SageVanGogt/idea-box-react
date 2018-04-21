import React from 'react';
import './styles/IdeaCard.css';

const IdeaCard = ({props}) => {
  return(
    <div className="idea-card" id={props.cardId}>
      <h2 className="idea-name">{props.title}</h2>
      <p className="idea-body">{props.body}</p>
      <div className="idea-quality">
        <img src="" alt=""/>
        <img src="" alt=""/>
        <h4 className="idea-quality">Quality: {}</h4>
      </div>
    </div>
  );
}

export default IdeaCard;
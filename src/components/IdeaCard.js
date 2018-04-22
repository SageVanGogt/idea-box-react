import React from 'react';
import './styles/IdeaCard.css';

const IdeaCard = (props) => {
  const {idea, editCardText} = props;

  return(
    <div className="idea-card" id={idea.cardId}>
      <h2 className="idea-name" onBlur={(event) => editCardText(event, idea.cardId, 'title')} contentEditable>{idea.title}</h2>
      <p className="idea-body" onBlur={(event) => editCardText(event, idea.cardId, 'body')} contentEditable>{idea.body}</p>
      <div className="idea-quality">
        <img src="" alt=""/>
        <img src="" alt=""/>
        <h4 className="idea-quality">Quality: {}</h4>
      </div>
    </div>
  );
}

export default IdeaCard;
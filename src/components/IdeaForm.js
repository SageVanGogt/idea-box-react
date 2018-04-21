import React from 'react';
import './styles/IdeaForm.css';

const IdeaForm = (props) => {
  return ( 
    <div className="idea-form">
      <form action="" onSubmit={(event) => {
        event.preventDefault()
        props.addToIdeaList(
          document.querySelector('.user-input-title').value, 
          document.querySelector('.user-input-body').value
        )
      }}>
        <input type="text" className="user-input-title" placeholder="title" />
        <input type="text" className="user-input-body" placeholder="idea" />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default IdeaForm;
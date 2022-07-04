import React from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";

const CssDisplay = () => {

  const notes: Array<Content> = [
    {key: 0, question: 'CSS Display property sets:', notes: [
      {key: 0, content: 'whether an element is treated as a block or inline element' },
      {key: 1, content: 'layout used for its children, such as grid or flex' },
    ]},
    {key: 1, question: 'Default display property', answer: 'Different default display property for different HTML elements.'},
    {key: 2, question: 'Default display property for some HTML elements', notes: [
      {key: 0, content: 'for <div> is block' },
      {key: 1, content: 'for <span> is inline' },
      {key: 2, content: 'for <head> is none' },
      {key: 3, content: 'for <h1> - <h6> is block' },
      {key: 4, content: 'for <footer> is block' },
      {key: 5, content: 'for <img> is inline-block' },
    ]},
  ]

  return (
    <React.Fragment>
      {notes.map(note => 
        <Note key={note.key} header={note.question} content={note.answer} notes={note.notes}/>
      )}
    </React.Fragment>
  );
};

export default CssDisplay;

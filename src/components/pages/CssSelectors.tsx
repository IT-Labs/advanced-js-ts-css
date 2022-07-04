import React from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";

const CssSelectors = () => {

  const notes: Array<Content> = [
    {key: 0, question: 'CSS Selectors categories:', notes: [
      {key: 0, content: 'Simple selectors' },
      {key: 1, content: 'Combinator selectors' },
      {key: 2, content: 'Pseudo-class selectors' },
      {key: 3, content: 'Pseudo-elements selectors' },
      {key: 4, content: 'Attribute selectors' },
    ]},
    {key: 1, question: 'Simple selectors:', notes: [
      {key: 0, content: '* - selects all elements' },
      {key: 1, content: '#id' },
      {key: 2, content: '.className' },
      {key: 3, content: 'tagName' },
    ]},
    {key: 2, question: 'Combinator selectors:', notes: [
      {key: 0, content: 'descendant selector (space)' },
      {key: 1, content: 'child selector (>)' },
      {key: 2, content: 'adjacent sibling selector (+)' },
      {key: 3, content: 'general sibling selector (~)' },
    ]},
    {key: 3, question: 'Pseudo-class selectors:', answer: 'keyword added to a selector that specifies a special state of the selected element. ex. :hover'},
    {key: 4, question: 'Pseudo-elements selectors:', notes: [
      {key: 0, content: 'Style specified parts of an element.' },
      {key: 1, content: 'Style the first letter, or line, of an element' },
      {key: 2, content: 'Insert content before, or after, the content of an element' },
    ]},
    {key: 5, question: 'Attribute selectors:', answer: 'Used to style elements that have specific attributes or attribute values.'},
  ]

  return (
    <React.Fragment>
      {notes.map(note => 
        <Note key={note.key} header={note.question} content={note.answer} notes={note.notes}/>
      )}
    </React.Fragment>
  );
};

export default CssSelectors;

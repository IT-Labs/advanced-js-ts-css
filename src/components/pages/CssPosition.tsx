import React from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";

const CssPosition = () => {

  const notes: Array<Content> = [
    {key: 0, question: 'CSS Position property values:', notes: [
      {key: 0, content: 'static' },
      {key: 1, content: 'absolute' },
      {key: 2, content: 'fixed' },
      {key: 3, content: 'relative' },
      {key: 4, content: 'sticky' },
      {key: 5, content: 'initial' },
      {key: 6, content: 'inherit' },
    ]},
    {key: 1, question: 'static', answer: 'Default value. Elements render in order, as they appear in the document flow.'},
    {key: 2, question: 'relative', answer: 'The element is positioned relative to its normal position.'},
    {key: 3, question: 'absolute', answer: 'The element is positioned relative to its first positioned (not static) ancestor element.'},
    {key: 4, question: 'fixed', answer: '	The element is positioned relative to the browser window.'},
    {key: 5, question: 'sticky', answer: 'A sticky element toggles between relative and fixed, depending on the scroll position.'},
    {key: 6, question: 'initial', answer: 'The initial keyword is used to set a CSS property to its default value. The initial keyword can be used for any CSS property, and on any HTML element.'},
    {key: 7, question: 'inherit', answer: 'The inherit keyword specifies that a property should inherit its value from its parent element. The inherit keyword can be used for any CSS property, and on any HTML element.'},
  ]

  return (
    <React.Fragment>
      {notes.map(note => 
        <Note key={note.key} header={note.question} content={note.answer} notes={note.notes}/>
      )}
    </React.Fragment>
  );
};

export default CssPosition;

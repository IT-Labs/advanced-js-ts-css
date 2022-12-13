import React from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";

const TypeAssertions = () => {

  const notes: Array<Content> = [
    {key: 0, question: 'What is TypeScript assertion?', answer: 'A mechanism which tells the compiler about the type of a variable.'},
    {key: 1, question: 'Note', answer: "Type assertion does not change the type of the variable, it is used to inform the TypeScript compiler about the type of the variable so we can access the intellisense."},
    {key: 2, question: 'How we do it?', notes: [
      {key: 0, content: '<type>someVar'}, {key: 1, content: 'someVar as type'}
    ]},
    {key: 3, question: 'TypeScript assertion and React JSX', answer: "Only the 'as' syntax is allowed, because JSX is emendable in XML like a syntax. And since XML uses angular brackets, it creates a conflict while using type assertions with angular brackets in JSX."},
  ]

  let someString: any;
  someString = "12345";
  let numberOfChars = someString.length;
  numberOfChars = (someString as string).length;
  // type assertion does not change the type of the variable, 
  // it is used to inform the TypeScript compiler about the type of the variable so we can access the intellisense.

  // template literals syntax: `some text ${expression} other text`
  console.log(`Number of chars in ${someString} is ${numberOfChars}`);

  return (
    <React.Fragment>
      {notes.map(note => 
        <Note key={note.key} header={note.question} content={note.answer} notes={note.notes}/>
      )}
    </React.Fragment>
  );
};

export default TypeAssertions;

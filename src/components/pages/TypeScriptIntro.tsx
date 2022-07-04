import React from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";

const TypeScriptIntro = () => {

  const notes: Array<Content> = [
    {key: 0, question: 'What is TypeScript?', answer: 'It is a superset of Javascript. Any valid JavaScript code is valid TypeScript code.'},
    {key: 1, question: 'What is Different?', notes: [
      {key: 0, content: 'Strong typing'}, {key: 1, content: 'Object-oriented feature'}, {key: 2, content: 'Compile-time errors'}, {key: 3, content: 'Intellisense'}
    ]},
    {key: 2, question: 'Transpile', answer: "Because browsers 'understand' Javascript (and not TypeScript) TypeScript compiler transpile our TypeScript code into Javascript code."},
  ]

  return (
    <React.Fragment>
      {notes.map(note => 
        <Note key={note.key} header={note.question} content={note.answer} notes={note.notes}/>
      )}
    </React.Fragment>
  );
};

export default TypeScriptIntro;

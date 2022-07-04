import React, { useEffect } from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";

const Generics = () => {

  const notes: Array<Content> = [
    {key: 0, question: 'What is TypeScript Generics?', answer: 'A tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. It allows users to consume these components and use their own types.'},
    {key: 1, question: 'Why do we need?', answer: 'Generics provides type safety and flexibility.'}
  ]

  let someNumber = 5;

  const constructArray = <T,>(num1: T, num2: T): T[] => {
    let ArrayOfT = [num1, num2];
    return ArrayOfT
  }

  useEffect(() => {
    console.log('String array: ', constructArray('someNumber', '5'));
  },[someNumber]);

  return (
    <React.Fragment>
      {notes.map(note => 
        <Note key={note.key} header={note.question} content={note.answer} notes={note.notes}/>
      )}
    </React.Fragment>
  );
};

export default Generics;

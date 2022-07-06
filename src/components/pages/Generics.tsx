import React, { useEffect } from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";

const Generics = () => {

  const notes: Array<Content> = [
    {key: 0, question: 'What is TypeScript Generics?', answer: 'A tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. It allows users to consume these components and use their own types.'},
    {key: 1, question: 'Why do we need?', answer: 'Generics provides type safety and flexibility.'}
  ]

  const constructArrayFromTwoElements = <T,>(elem1: T, elem2: T): T[] => {
    let ArrayOfT = [elem1, elem2];
    return ArrayOfT
  }

  // rest operator
  const constructArray = <T,>(...args: T[]): T[] => {
    let ArrayOfT:T[] = [];
    args.forEach((element) => {
      ArrayOfT.push(element);
    })
    return ArrayOfT;
  }

  useEffect(() => {
    console.log('String array: ', constructArrayFromTwoElements('someNumber', '5'));
    console.log('Numbers array: ', constructArrayFromTwoElements(1, 5));
    console.log('Numbers array: ', constructArray(1, 5, 7, 9, 11, 15));
  },[]);

  return (
    <React.Fragment>
      {notes.map(note => 
        <Note key={note.key} header={note.question} content={note.answer} notes={note.notes}/>
      )}
    </React.Fragment>
  );
};

export default Generics;

import React, { useEffect, useMemo } from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";

const TypeInference = () => {

  const notes: Array<Content> = [
    {key: 0, question: 'What is TypeScript inference?', answer: 'TypeScript infers types of variables when there is no explicit information available in the form of type annotations.'},
    {key: 1, question: 'Types are inferred by TypeScript compiler when:', notes: [
      {key: 0, content: 'Variables are initialized'}, {key: 1, content: 'Default values are set for parameters'}, {key: 2, content: 'Function return types are determined'}
    ]}
  ]

  // type inference when value are initialized - someNumber variable type is set to 'number'.
  let someNumber = 5;
  let someArray = useMemo(() => [1, 2, 'some text'],[]);

  // type inference when default values are set for parameters - num2 variable type is set to 'number'.
  // type inference when function return types are determined - makeDouble return type is set to 'number'.
  const makeDouble = (num1: number, num2 = 2) => {
    // if (num1 > 10) {
      return num1 * num2;
    // }
  }

  let javaScriptLikeVar: any = 5;
  console.log(`javaScriptLikeVar before change: ${javaScriptLikeVar}, of type: ${typeof javaScriptLikeVar}`);
  javaScriptLikeVar = 'some text';
  console.log(`javaScriptLikeVar after change: ${javaScriptLikeVar}, of type: ${typeof javaScriptLikeVar}`);

  useEffect(() => {
    someArray.push('new text');
    console.log('Make double returns: ', makeDouble(someNumber, 5));
  },[someArray, someNumber]);

  return (
    <React.Fragment>
      {notes.map(note => 
        <Note key={note.key} header={note.question} content={note.answer} notes={note.notes}/>
      )}
    </React.Fragment>
  );
};

export default TypeInference;

import React, { useCallback, useEffect } from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";

const VarLetConst = () => {

  const notes: Array<Content> = [
    {key: 0, question: 'VAR', answer: 'Variables declared with var keyword are function-scoped.'},
    {key: 1, question: 'LET and CONST', answer: 'Variables declared with let and const keyword are block-scoped.'},
    {key: 2, question: 'CONST', answer: "'const' declarations must be initialized"},
  ]

  const varIteration = useCallback(() => {
    for (var i = 0; i <=3; i++){
      console.log("In 'var' cycle: ", i);
    }
    // variables declared with var keyword are are function-scoped.
    console.log('var outside of block: ', i);
  },[]);

  const letIteration = useCallback(() => {
    let i: number;
    for (i = 0; i <=3; i++){
      console.log("In 'let' cycle: ", i);
    }
    // variables declared with let keyword are are block-scoped.
    console.log('let outside of block: ', i);
  },[]);

  // 'const' variable declarations must be initialized.
  // variables declared with const keyword are are block-scoped.
  // 'cont' values cannot be reassigned.
  // if you don't need to reassigned 'const' should be a default choice, otherwise use let.
  // const testConst = 'Test';

  useEffect(() => {
    varIteration();
    // testConst = 'some other text';
    letIteration();
    return () => {};
  },[varIteration, letIteration]);

  return (
    <React.Fragment>
      {notes.map(note => 
        <Note key={note.key} header={note.question} content={note.answer} notes={note.notes}/>
      )}
    </React.Fragment>
  );
};

export default VarLetConst;

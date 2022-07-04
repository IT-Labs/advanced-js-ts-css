import React, { useCallback, useEffect } from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";

const VarLetConst = () => {

  const notes: Array<Content> = [
    {key: 0, question: 'VAR', answer: 'Variables declared with var keyword are are function-scoped.'},
    {key: 1, question: 'LET and CONST', answer: 'Variables declared with let and const keyword are are block-scoped.'},
    {key: 2, question: 'CONST', answer: "'const' declarations must be initialized"},
  ]

  const varIteration = useCallback(() => {
    for (var i = 0; i <=3; i++){
      console.log('var ', i);
    }
    // variables declared with var keyword are are function-scoped.
    console.log('var ', i);
  },[]);
  
  const letIteration = useCallback(() => {
    for (let i = 0; i <=3; i++){
      console.log('let', i);
    }
    // variables declared with let keyword are are block-scoped.
    // console.log(i);
  },[]);

  // 'const' declarations must be initialized.
  // variables declared with const keyword are are block-scoped.
  // const testConst = 'Test';

  useEffect(() => {
    varIteration();
    // testConst = 2;
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

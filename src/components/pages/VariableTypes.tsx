import React, { useEffect } from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";

const VariableTypes = () => {

  const notes: Array<Content> = [
    {key: 0, question: 'Two types of variables', notes: [
      {key: 0, content: 'Primitive or Value Types'}, {key: 1, content: 'Reference Types'}
    ]},
    {key: 1, question: 'Primitive Types', notes: [
      {key: 0, content: 'String'}, {key: 1, content: 'Number'}, {key: 2, content: 'Boolean'}, {key: 3, content: 'undefined'}, {key: 4, content: 'null'}
    ]},
    {key: 2, question: 'undefined', answer: "Variables are undefined by default before initialization"},
    {key: 3, question: 'null', answer: "We use null to explicitly clear the value from variable"},
    {key: 4, question: 'Reference Types', notes: [
      {key: 0, content: 'Object'}, {key: 1, content: 'Array'}, {key: 2, content: 'Function'}
    ]},
  ]

  let primitiveVar = 'Primitive Var';
  let referenceVar = {id: 0, name: 'referenceVar'};

  useEffect(() => {
    let secondPrimitiveVar = primitiveVar;
    secondPrimitiveVar = 'Second Primitive Var';
    console.log('primitiveVar', primitiveVar);
    console.log('secondPrimitiveVar', secondPrimitiveVar);

    let secondReferenceVar = referenceVar;
    secondReferenceVar.name = 'Second Reference Var';
    console.log('referenceVar', referenceVar);
    console.log('secondReferenceVar', secondReferenceVar);
  })

  return (
    <React.Fragment>
      {notes.map(note => 
        <Note key={note.key} header={note.question} content={note.answer} notes={note.notes}/>
      )}
    </React.Fragment>
  );
};

export default VariableTypes;

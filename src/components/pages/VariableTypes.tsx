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
    {key: 5, question: 'Reference Types', answer: "Object value is stored in memory and we store a reference (pointer) to that place in memory in our variables."},
    {key: 6, question: 'Copying Reference Types', answer: "If you reassign them you are copying the pointer not the value."},
  ]

  let primitiveA = 'Text A';
  let referenceA = {id: 0, name: 'Text A'};

  useEffect(() => {
    let primitiveB = primitiveA;
    primitiveB = 'Text B';
    console.log('primitiveA value:', primitiveA);
    console.log('primitiveB value:', primitiveB);

    let referenceB = referenceA;
    referenceB.name = 'Text B';
    console.log('referenceA value:', referenceA);
    console.log('referenceB value:', referenceB);
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

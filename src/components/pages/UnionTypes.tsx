import React from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";

// string literal type
type SortOrderType = 'Ascending' | 'Descending';

const UnionTypes = () => {

  const notes: Array<Content> = [
    {key: 0, question: 'What is TypeScript Union Types?', answer: 'TypeScript allows us to use more than one data type for a variable or a function parameter.'},
    {key: 1, question: 'How we do it?', notes: [
      {key: 0, content: 'We use the vertical bar (|) to separate each type'}, {key: 1, content: 'someVar: number | string | boolean.'}
    ]}
  ]

  // same as let someArray: Array<number|string> = [1, 2, 3];
  let someArray: (number | string)[] = [1, 2, 3];
  someArray.push('text');
  console.log(someArray);

  let sortOrder: SortOrderType = 'Ascending';
  sortOrder = 'Descending';
  console.log(typeof sortOrder);

  return (
    <React.Fragment>
      {notes.map(note => 
        <Note key={note.key} header={note.question} content={note.answer} notes={note.notes}/>
      )}
    </React.Fragment>
  );
};

export default UnionTypes;

import React from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";
import * as PersonData from "../../models/person.json";

const AccessingObjectProperties = () => {

  const notes: Array<Content> = [
    {key: 0, question: 'Two ways for accessing object properties', notes: [{key: 0, content: 'Dot notation'}, {key: 1, content: 'Bracket notation'}]},
    {key: 1, question: 'Dot notation', answer: 'We use the dot notation by default.'},
    {key: 2, question: 'Dot notation', answer: "Property identifies can only be alphanumeric (and _ and $). Properties can't start with a number."},
    {key: 3, question: 'Bracket notation', answer: 'We use bracket notation in specific cases.'},
    {key: 4, question: 'Specific case 1', answer: "When we don't know in advance what property we are going to access."},
    {key: 5, question: 'Specific cases 2', answer: "Allows access to properties containing special characters."},
    {key: 6, question: 'Specific cases 3', answer: "Dot notation cannot be used with property that contain dot (json response could contain property 'foo.something')."},
  ]

  
  const person = PersonData;
  const address = '1address';
  console.log(person['name.surname']);
  console.log(person[address]);

  const contentAnswer = 'answer';
  
  return (
    <React.Fragment>
      {notes.map(note => 
        <Note key={note.key} header={note['question']} content={note[contentAnswer]} notes={note.notes}/>
      )}
    </React.Fragment>
  );
};

export default AccessingObjectProperties;

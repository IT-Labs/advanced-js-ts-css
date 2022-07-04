import React from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";

const NamedAndDefaultExports = () => {

  const notes: Array<Content> = [
    {key: 0, question: 'Named Export', answer: "export Something"},
    {key: 1, question: 'Named Import', answer: "import { Something } from './somewhere'"},
    {key: 2, question: 'Default Export', answer: "export default Something"},
    {key: 3, question: 'Default Import', answer: "import Something from 'somewhere'"},
  ]

  return (
    <React.Fragment>
      {notes.map(note => 
        <Note key={note.key} header={note.question} content={note.answer} notes={note.notes}/>
      )}
    </React.Fragment>
  );
};

export default NamedAndDefaultExports;

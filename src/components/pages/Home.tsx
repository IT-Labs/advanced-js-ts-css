import React from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";

const Home = () => {
  const notes: Array<Content> = [
    {key: 0, question: 'What is JavaScript?', answer: 'Javascript is a programming language invented by Brendan Eich in 1995, and became an ECMA standard in 1997.'},
    {key: 1, question: 'What is Ecma?', answer: 'Ecma International is an industry association dedicated to the standardization of information and communication systems'},
    {key: 2, question: 'When was Ecma founded?', answer: 'The organization was founded in 1961 to standardize computer systems in Europe (European Computer Manufacturers Association)'},
    {key: 3, question: 'When Ecma became International?', answer: "Since 1994 organization's name is no longer an acronym and no longer uses full capitalization to reflect the organization's global reach and activities."},
    {key: 4, question: 'Where does Javascript code run?', answer: 'Javascript was originally designed to run only in browsers. Every browser has JavaScript engine that can execute Javascript code.'},
    {key: 5, question: 'JavaScript Engines', notes: [
      {key: 0, content: 'Firefox - SpiderMonkey'}, {key: 1, content: 'Chrome - v8'}, {key: 2, content: 'Internet explorer and Microsoft Edge - Chakra'}
    ]},
    {key: 6, question: 'Node', answer: "In 2009 Ryan Dahl embedded Chrome's v8 into C++ program that he called Node. So Javascript code can run inside of a browser or in node."},
    {key: 7, question: 'ECMAScript versions', answer: 'ECMAScript versions have been abbreviated to ES1, ES2, ES3, ES5, and ES6. Since 2016 new versions are named by year (ECMAScript 2016 / 2017 / 2018)'},
  ]
  return (
    <React.Fragment>
      {notes.map(note => 
        <Note key={note.key} header={note.question} content={note.answer} notes={note.notes} />
      )}
    </React.Fragment>
  );
};

export default Home;

import React from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";

const IfElseSwitch = () => {

  const notes: Array<Content> = [
    {key: 1, question: 'If Else', answer: `if (condition) {
      //  block of code to be executed if the condition is true
    } else {
      //  block of code to be executed if the condition is false
    }`},
    {key: 2, question: 'Switch', answer: "Use the switch statement to select one of many code blocks to be executed."},
  ]

  
  let attenders = 7;
  // let isOk = true;
  // if(attenders === 4 && isOk){
  //   console.log("All attenders are here");
  // } else if (attenders < 4) {
  //   console.log("Someone is missing");
  // } else {
  //   console.log("We have a guest to our presentation");
  // }

  
  // attenders === 4 ? console.log("All attenders are here") : console.log("Someone is missing");
  // attenders === 4 && console.log("All attenders are here");

  switch(attenders) {
    case 1:
      console.log("We have 1 attender");
      break;
    case 2:
      console.log("We have 2 attenders");
      break;
    case 3:
      console.log("We have 3 attenders");
      break;
    case 4:
      console.log("We have 4 attenders");
      break;
    default:
      console.log("Some other number of attenders");
  }

  
  return (
    <React.Fragment>
      {notes.map((note, index) => 
        <Note key={index} header={note['question']} content={note.answer} notes={note.notes}/>
      )}
    </React.Fragment>
  );
};

export default IfElseSwitch;

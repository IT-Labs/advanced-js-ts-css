import React, { useEffect } from "react";
import picture from "../../assets/img/shallow_deep_copy.jpg";
import Content from "../../models/Content";
import Note from "../directives/Note";

interface Person{
  name: string;
  surname: string;
  address: {
    city: string;
    country: string;
  }
}

const ShallowDeepCopy = () => {

  const notes: Array<Content> = [
    {key: 0, question: 'Spread operator note', answer: "When you have nested data in an array or object the spread operator will create a deep copy of the top most data and a shallow copy of the nested data."},
  ]
  
  useEffect(() => {
    let person1 = {
      name: "John",
      surname: "Doe",
      address: {
        city: "Skopje",
        country: "Macedonia",
      },
    };

    let person2 = { ...person1 };

    person2.surname = 'Elton';
    // person2.address.city = "Bitola";
    console.log("Person 1: ", person1);
    console.log("Person 2: ", person2);

    // let person3: Person = JSON.parse(JSON.stringify(person2));
    // person3.address.city = "Ohrid";
    // console.log("Person 2: ", person2);
    // console.log("Person 3: ", person3);
  }, []);

  return (
    <React.Fragment>
      {notes.map(note => 
        <Note key={note.key} header={note.question} content={note.answer} notes={note.notes}/>
      )}
      <div style={{ padding: "40px" }}>
        <img src={picture} alt="shallow_deep_copy" />
      </div>
    </React.Fragment>
  );
};

export default ShallowDeepCopy;

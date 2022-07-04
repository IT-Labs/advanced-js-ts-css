import React, { useEffect, useMemo } from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";

const SpreadRestDestructuring = () => {

  const notes: Array<Content> = [
    {key: 0, question: 'Spread operator', answer: "Copy all or part of an existing array or object into another array or object"},
    {key: 1, question: 'Rest operator', answer: "Merge a list of function arguments into an array"},
    {key: 2, question: 'Destructuring', answer: "Extract array elements or object properties and store them in variables"},
  ]

  const numbersFromOneToFive = useMemo(() => [1, 2, 3, 4, 5],[]);
  const numbersFromSixToTen = useMemo(() => [6, 7 ,8 , 9, 10],[]);
 
  // rest operator
  let calculateSumOfNumbers = (...args: number[]) => {
    let result = 0;
    args.forEach((number) => {
      result += number;
    })
    return result;
  }

  useEffect(() => {
    // spread operator
    const numbersFromOneToTen = [...numbersFromOneToFive, ...numbersFromSixToTen];
    console.log('numbersFromOneToTen', numbersFromOneToTen);

    const sumOneToThree = calculateSumOfNumbers(1, 2, 3);
    console.log('sumOneToThree', sumOneToThree);
    const sumOneToFive = calculateSumOfNumbers(1, 2, 3, 4, 5);
    console.log('sumOneToFive', sumOneToFive);

    // Array Destructuring
    let [one, ,three, four] = numbersFromOneToFive;
    console.log('one', one);
    console.log('three', three);
    console.log('four', four);
    
    // Object destructuring example is in Note.jsx [const {header, content, notes} = props]
  },[numbersFromOneToFive, numbersFromSixToTen])

  return (
    <React.Fragment>
      {notes.map(note => 
        <Note key={note.key} header={note.question} content={note.answer} notes={note.notes}/>
      )}
    </React.Fragment>
  );
};

export default SpreadRestDestructuring;

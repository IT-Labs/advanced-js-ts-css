import React, { useCallback, useEffect, useMemo } from "react";
import Note from "../directives/Note";
import Content from "../../models/Content";

interface User {
  id: number;
  name: string;
  isConfirmed?: boolean;
}

const ArrayMethods = () => {

  const notes: Array<Content> = [
    {key: 0, question: 'Types of Array Methods', notes: [
      {key: 0, content: 'Array Methods'}, {key: 1, content: 'Sorting Methods'}, {key: 2, content: 'Iteration Methods'}]},
    {key: 1, question: 'Array Methods', notes: [
      {key: 0, content: 'toString()'}, {key: 1, content: 'join()'}, {key: 2, content: 'push()'}, {key: 3, content: 'concat()'}, {key: 4, content: '...'}
    ]},
    {key: 2, question: 'Sorting Methods', notes: [
      {key: 0, content: 'sort()'}, {key: 1, content: 'reverse()'}, {key: 2, content: 'Math.max.apply(null, array)'}, {key: 3, content: 'Math.min.apply(null, array)'}
    ]},
    {key: 3, question: 'sort() method', answer: 'Sorts an array alphabetically (as strings). Because of this, the sort() method will produce incorrect result when sorting numbers. You can fix this by providing a compare function: numbers.sort(function(a, b){return a - b});'},
    {key: 4, question: 'Iteration Methods', answer: 'Executes a provided function once for each array element.'},
    {key: 5, question: 'Iteration Methods', notes: [
      {key: 0, content: 'forEach()'}, {key: 1, content: 'map()'}, {key: 2, content: 'filter()'}, {key: 3, content: 'every()'}, {key: 4, content: '...'}
    ]},
  ]

  let users: Array<User> = useMemo(() => [{id: 0, name: 'John Doe'}, {id: 1, name: 'Will Barrow'}, {id: 2, name: 'Guy Mann'}],[]);
  let userStatuses = useMemo(() => [{id: 5, isConfirmed: true}, {id: 1, isConfirmed: true}, {id: 3, isConfirmed: false}, {id: 0, isConfirmed: false}, {id: 2, isConfirmed: false}],[]);

  const checkUserStatusOld = useCallback(() => {
    for(let i = 0; i < users.length; i++){
      for(let j = 0; j < userStatuses.length; j++) {
        users[i].id === userStatuses[j].id && (users[i].isConfirmed = userStatuses[j].isConfirmed); 
      }  
    }
  },[users, userStatuses]);

  // const checkUserStatus = useCallback(() => {
  //   users.forEach((user) => {
  //     userStatuses.forEach((userStatus) => {
  //       user.id === userStatus.id && (user.isConfirmed = userStatus.isConfirmed); 
  //     })
  //   })
  // },[users, userStatuses]);

  useEffect(() => {
    checkUserStatusOld();
    console.log(users);
  },[checkUserStatusOld, users])


  return (
    <React.Fragment>
      {notes.map(note => 
        <Note key={note.key} header={note.question} content={note.answer} notes={note.notes}/>
      )}
    </React.Fragment>
  );
};

export default ArrayMethods;

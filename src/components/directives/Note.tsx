import React from "react";
import Grid from '@mui/material/Grid';
import classes from './Note.module.css';

const Note = (props: { header: any; content: any; notes: any; }) => {
  const {header, content, notes} = props;
  // const header = props.header;
  // const content = props.content;
  // const notes = props.notes;

  // {header: title, content, notes} -> for alias
  
  return (
    <Grid item xs={3}>
      <div className={classes.container}>
        {!!header && <div className={classes.header}>{header}</div>}
        {!!content && <div className={classes.content}>{content}</div>}
        {!!notes &&
        <ul >
          {notes.map((note: { key: number; content: string }) => <li key={note.key}>{note.content}</li>)}
        </ul>}
      </div>
    </Grid>
  );
};

export default Note;

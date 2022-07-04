import React from "react";
import Grid from "@mui/material/Grid";
import classes from './CssDisplayExamples.module.css';

const CssDisplayExamples = () => {

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <div className={classes['default-div']}>This is a div (default display is block)</div>
        <span className={classes.span1}>This is a span (default display is inline)</span>
        <span className={classes.span2}>This is a span2 (default display is inline)</span>
        <span className={classes.span3}>This is a span3 (display: inline-block)</span>
        <span className={classes.spanNone}>This is a span4 (display: none)</span>

        <div className={classes['flex-container']}>
          <div className={`${classes['first-div']} ${classes['flex-item']}`}>First div</div>
          <div className={`${classes['second-div']} ${classes['flex-item']}`}>Second div</div>
          <div className={`${classes['third-div']} ${classes['flex-item']}`}>Third div</div>
        </div>

        <div className={`${classes['flex-container']} ${classes['flex-container-vertical']}`}>
          <div className={`${classes['first-div']} ${classes['flex-item']}`}>First div</div>
          <div className={`${classes['second-div']} ${classes['flex-item']}`}>Second div</div>
          <div className={`${classes['third-div']} ${classes['flex-item']}`}>Third div</div>
        </div>
      </Grid>
      
    </React.Fragment>
  );
};

export default CssDisplayExamples;

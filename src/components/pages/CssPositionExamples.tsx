import React from "react";
import classes from './CssPositionExamples.module.css';

const CssPositionExamples = () => {

  return (
    <React.Fragment>
      <div className={classes.container}>

        <div className={classes.relativeDivContainer}>Position relative
          <div className={classes.staticDiv}>Position static</div>
          <div className={classes.relativeDiv}>Position relative</div>
          <div className={classes.staticDiv}>Position static</div>
        </div>

        <div className={classes.relativeDivContainer}>Position relative
          <div className={classes.staticDiv}>Position static</div>
          <div className={classes.absoluteDiv}>Position absolute</div>
          <div className={classes.staticDiv}>Position static</div>
        </div>

        <div className={classes.relativeDivContainer}>Position relative
          <div className={classes.staticDiv}>Position static</div>
          <div className={classes.fixedDiv}>Position fixed</div>
          <div className={classes.staticDiv}>Position static</div>
        </div>

        <div className={classes.stickyAloneDiv}>Position sticky</div>

        <div className={classes.relativeDivContainer}>Position relative
          <div className={classes.staticDiv}>Position static</div>
          <div className={classes.stickyDiv}>Position sticky</div>
          <div className={classes.staticDiv}>Position static</div>
          <div className={classes.staticDiv}>Position static</div>
          <div className={classes.staticDiv}>Position static</div>
        </div>

        <div className={classes.relativeDivContainer}>Position relative
          <div className={classes.staticDiv}>Position static</div>
          <div className={classes.inheritDiv}>Position inherit</div>
          <div className={classes.staticDiv}>Position static</div>
        </div>

      </div>
    </React.Fragment>
  );
};

export default CssPositionExamples;

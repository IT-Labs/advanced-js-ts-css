import React from "react";
import styles from './CssSelectorsExamples.module.css';

const CssSelectorsExamples = () => {

  return (
    <React.Fragment>
      <div id={styles.container}>
        Container div
        <div className={styles.firstNestedLevel}>First Nested Level
          <div className={styles.secondNestedLevel}>Second Nested Level</div>
          <div className={styles.secondNestedLevel}>Second Nested Level</div>
          <div className={styles.secondNestedLevel}>Second Nested Level</div>
        </div>

        <div className={styles.firstNestedLevel}>First Nested Level
          <div className={styles.secondNestedLevel}>Second Nested Level</div>
          <div className={styles.secondNestedLevel}>Second Nested Level</div>
          <div className={styles.secondNestedLevel}>Second Nested Level</div>
        </div>


      </div>
    </React.Fragment>
  );
};

export default CssSelectorsExamples;

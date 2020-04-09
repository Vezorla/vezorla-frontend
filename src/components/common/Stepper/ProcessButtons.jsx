import React from 'react';
import {Button, Container} from '@material-ui/core';
import globalStyles from "../../../assets/styles/styles";

/**
 * @file Process Buttons Component
 * @author MinhL4m
 * @version 1.0
 */

export default function ProcessButtons(props) {
  const classesGlobal = globalStyles();

  return (
    <Container className={classesGlobal.containerButtons}>
      <Button
        variant={"contained"}
		color={"primary"}
        disabled={props.stage === 0}
        onClick={props.handleBack}
      >
        Back
      </Button>
      {props.handleNext ?
        <Button
          variant="contained"
          color="primary"
          disabled={!props.complete}
		  onClick={props.handleNext}
        >
          {props.hasNext ? 'Next' : 'Submit'}
        </Button> : ''}
    </Container>
  );
}
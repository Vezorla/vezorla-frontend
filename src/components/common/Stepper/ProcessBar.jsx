import React from 'react';
import {
  Container,
  Step,
  StepLabel,
  Stepper
} from '@material-ui/core';

/**
 * @author Minh Lam
 * @description Function Component for  ProcessBar
 * This component contains Stepper
 * props:
 *      - steps: array of string contains name of all the step
 *      - stage: current step
 */
//TODO check the reset button. Change to something more useful

function ProcessBar(props) {
  const steps = props.steps;

  return (
    <Container disableGutters>
      <Stepper activeStep={props.stage} alternativeLabel>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Container>
  );
}

export default ProcessBar;
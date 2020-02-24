import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


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
    <div>
      <Stepper activeStep={props.stage}>
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
    </div>
  );
}

export default ProcessBar;
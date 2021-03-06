import React from 'react';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Container} from "@material-ui/core";

/**
 * @file Stepper Component
 * @author MinhL4m
 * @version 1.0
 */

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  img: {
    maxHeight: '80vh',
    width: '100%',
  }
}));

/**
 * @author Minh Lam
 * @description Function Component for  Stepper
 * This component contains AutoPlaySwipeableViews (images slidder) and MobileStepper (2 buttons)
 * props:
 *      - imgs: array contain url of img
 */
function Stepper(props) {
  const classes = useStyles();
  const theme = useTheme();

  //------state-----
  const [activeStep, setActiveStep] = React.useState(0);

  //----variables for useful data-----
  const maxSteps = props.imgs.length;
  const imgs = props.imgs;

  //------handle Event functions----
  const handleNext = () => {
    if (props.setActive !== null && props.setActive !== undefined) {
      props.setActive(activeStep + 1)
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (props.setActive !== null && props.setActive !== undefined) {
      props.setActive(activeStep - 1)
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
      <Container>
      {props.default !== null && props.default !== undefined ? (
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {imgs.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step} alt="Product Pictures"/>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      ) : (
        <img className={classes.img} src={imgs[activeStep]} alt="Product Pictures"/>
      )}

      {/* ------Buttons to change img slide------- */}
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
			color={"secondary"}
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
          </Button>
        }
        backButton={
          <Button
            size="small"
			color={"secondary"}
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
            Back
          </Button>
        }
      />
    </Container>
  );
}

export default Stepper;

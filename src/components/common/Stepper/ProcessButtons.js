import React from 'react'
import {Button} from '@material-ui/core'

// staqe: current stage, handleBack: back, handleNext: next, complete: fill 
function ProcessButtons(props) {
    return (
        <div>
        <div>
              <Button disabled={props.stage === 0} onClick={props.handleBack}>
                Back
              </Button>
              
              <Button
                variant="contained"
                color="primary"
                onClick={props.handleNext}
                disabled={!props.complete}
              >
                {props.hasNext?"Next":"Submit"}
              </Button>
            </div>
        </div>
    )
}
export default ProcessButtons
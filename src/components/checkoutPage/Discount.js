import React, { Component } from 'react'
import {FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from '@material-ui/core'
import ProcessButtons from '../common/Stepper/ProcessButtons'

export default class Discount extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            list: [{Id: 12, description: 'jdnsajdnjsandjknsajdnjsandjsandjnasd'},
            {Id: 1, description: 'dbsahdbhjsabdhbsahjbdhjsabdhjbasjhdbasdbjhbsadjhbasjhdb'}],
            value: '',
        }
    }
    
    componentDidMount(){

    }

    changeHandler = (e) => {
        this.setState({value: e.target.value})
    }

    handleBack = () =>{
        this.props.setStage(this.props.stage - 1)
    }

    render() {
        return (
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Discount</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={this.state.value} onChange={this.changeHandler}>
                        {this.state.list.map(discout => <FormControlLabel key={discout.Id} value={discout.Id+""} control={<Radio color="primary" />} label={discout.description}/>)}
                    </RadioGroup>
                </FormControl>
                <ProcessButtons 
                    stage={this.props.stage} 
                    handleBack={this.handleBack} 
                    handleNext={this.handleNext} 
                    hasNext={true} 
                    complete={true}
                />
            </div>
        )
    }
}

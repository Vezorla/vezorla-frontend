import React, { Component } from 'react';
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import ProcessButtons from '../common/Stepper/ProcessButtons';

export default class Discount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{ Id: 12, description: 'jdnsajdnjsandjknsajdnjsandjsandjnasd' },
				{ Id: 1, description: 'dbsahdbhjsabdhbsahjbdhjsabdhjbasjhdbasdbjhbsadjhbasjhdb' }
			],
			value: ''
		};
	}

	componentDidMount() {}

	fetchData = async () => {
		const data = await fetch(`http://localhost:8080/api/customer/discount`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then((res) => {
				return res.json();
			})
			.catch((err) => {
				return null;
			});
		if (data !== null) {
			this.setStage({ list: data });
		}
	};

	changeHandler = (e) => {
		this.setState({ value: e.target.value });
	};

	handleBack = () => {
		this.props.setStage(this.props.stage - 1);
	};

	handleNext = async () => {
		const data = await fetch(`http://localhost:8080/api/customer/discount`, {
			method: 'PUT',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.value)
		})
			.then((res) => {
				return res.json();
			})
			.catch((err) => {
				return null;
			});
		this.props.setStage(this.props.stage + 1);
	};

	render() {
		return (
			<div>
				<FormControl component="fieldset">
					<FormLabel component="legend">Discount</FormLabel>
					<RadioGroup
						aria-label="gender"
						name="gender1"
						value={this.state.value}
						onChange={this.changeHandler}
					>
						{this.state.list.map((discout) => (
							<FormControlLabel
								key={discout.Id}
								value={discout.Id + ''}
								control={<Radio color="primary" />}
								label={discout.description}
							/>
						))}
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
		);
	}
}

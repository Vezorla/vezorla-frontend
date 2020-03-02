import React, { Component } from 'react';
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import ProcessButtons from '../../common/Stepper/ProcessButtons';

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

	//fetch discount list
	fetchData = async () => {
		try {
			const response = await fetch(`http://localhost:8080/api/customer/discount`, {
				method: 'GET',
				credentials: 'include',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			});

			if (response.status === 200) {
				let data = await response.json();
				if (data !== null) {
					this.setStage({ list: data });
				}
			}
		} catch (err) {}
	};

	changeHandler = (e) => {
		this.setState({ value: e.target.value });
	};

	handleBack = () => {
		this.props.setStage(this.props.stage - 1);
	};

	// put the discount user choice
	handleNext = () => {
		(async () => {
			try {
				const response = await fetch(`http://localhost:8080/api/customer/discount`, {
					method: 'PUT',
					credentials: 'include',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(this.state.value)
				});

				if (response.status === 200) {
					let data = await response.json();
					return data;
				}
			} catch (err) {
				return null;
			}
		})();
		console.log('here');
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
						{this.state.list === '' ? (
							''
						) : (
							this.state.list.map((discout) => (
								<FormControlLabel
									key={discout.Id}
									value={discout.Id + ''}
									control={<Radio color="primary" />}
									label={discout.description}
								/>
							))
						)}
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

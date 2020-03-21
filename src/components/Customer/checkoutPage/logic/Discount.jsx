import React, { Component } from 'react';
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import ProcessButtons from '../../../common/Stepper/ProcessButtons';

/**
 * @file Discount Component
 * @author MinhL4m
 * @version 1.0
 */

const dummyData = [
	{ Id: 12, code: 'avc', description: 'jdnsajdnjsandjknsajdnjsandjsandjnasd' },
	{ Id: 1, code: 'ava', description: 'dbsahdbhjsabdhbsahjbdhjsabdhjbasjhdbasdbjhbsadjhbasjhdb' }
];
export default class Discount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			value: 'NON'
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	//fetch discount list
	fetchData = async () => {
		try {
			const response = await fetch(`http://localhost:8080/api/customer/discounts/get`, {
				method: 'GET',
				credentials: 'include',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			});

			if (response.status === 200) {
				let data = await response.json();
				if (data !== null && (data !== undefined) & (data.length !== 0)) {
					this.setState({ list: data });
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
				const response = await fetch(`http://localhost:8080/api/customer/selected_discount/get`, {
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
		this.props.setStage(this.props.stage + 1);
	};

	render() {
		return (
			<div>
				{this.state.list.length === 0 ? (
					<h1>There is no current discount</h1>
				) : (
					<div>
						<FormControl component="fieldset">
							<FormLabel component="legend">Discount</FormLabel>
							<RadioGroup
								aria-label="discount"
								name="discount"
								value={this.state.value}
								onChange={this.changeHandler}
							>
								{this.state.list === '' ? (
									''
								) : (
									this.state.list.map((discount) => (
										<FormControlLabel
											key={discount.code}
											value={discount.code}
											control={<Radio color="primary" />}
											label={discount.description}
										/>
									))
								)}
								<FormControlLabel
									key="NON"
									value="NON"
									control={<Radio color="primary" />}
									label="I am good"
								/>
							</RadioGroup>
						</FormControl>
					</div>
				)}
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

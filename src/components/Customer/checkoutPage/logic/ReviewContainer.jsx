import React, { Component } from 'react';
import Review from '../view/Review';
import PopUp from '../../../common/PopUp/PopUp';
import { withRouter } from 'react-router';

/**
 * @file Cart Component
 * @author MinhL4m
 * @version 1.0
 */

const GET_URL = 'http://localhost:8080/api/customer/cart/review';

class ReviewContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			info: {
				subtotal: '',
				discount: '',
				discounted_subtotal: '',
				taxes: '',
				shipping: '',
				Total: ''
			},
			stage: '',
			done: false,
			error: false
		};
	}

	fetchData = async () => {
		this.setState({ stage: 'loading' });

		try {
			const response = await fetch(GET_URL, {
				method: 'GET',
				credentials: 'include',
				mode: 'cors',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			});

			if (response.status === 200) {
				const data = await response.json();
				if (data !== null) {
					this.setState({ list: data[0] });
					this.setState({ info: { ...data[1] } });
					this.setState({ stage: 'done' });
				}
			} else if (response.status > 400) {
				this.setState({ stage: 'error', list: [] });

				return null;
			}
		} catch (err) {
			this.setState({ stage: 'error', list: [] });

			return null;
		}
	};

	componentDidMount() {
		this.fetchData();
	}

	handleBack = () => {
		this.props.setStage(this.props.stage - 1);
	};

	render() {
		return (
			<div>
				{this.state.error ? (
					<PopUp
						message="Something wrong!"
						onClose={() => this.setState({ error: false })}
						handleOk={() => this.setState({ error: false })}
					/>
				) : (
					''
				)}
				{this.state.done ? (
					<PopUp
						label="Thank You"
						message="Thank you! I hope you enjoy our products!"
						onClose={() => this.props.history.push('/')}
						handleOk={() => this.props.history.push('/')}
					/>
				) : (
					''
				)}
				<Review
					{...this.state}
					setDone={() => this.setState({ done: true })}
					setError={() => this.setState({ error: true })}
					handleNext={this.handleNext}
					handleBack={this.handleBack}
				/>
			</div>
		);
	}
}
export default withRouter(ReviewContainer);

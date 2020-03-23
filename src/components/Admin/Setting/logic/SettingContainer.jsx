import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PopUp from '../../../common/PopUp/PopUp';
import Setting from '../view/Setting';

const MESSAGE =
	'Make sure to write correctly the email, as it is your username to enter the system and teh main method for communication with the system';
const UPDATE_URL = 'url';

class SettingContainer extends Component {
	constructor() {
		super();
		this.state = {
			info: {
				email: '',
				password: '',
				gstNum: ''
			},
			update: false,
			error: false
		};
	}

	setStateValue = (field) => {
		return (e) => {
			this.setState({ info: { ...this.state.info, [`${field}`]: e.target.value } });
		};
	};

	onUpdate = async () => {
		this.setState({ update: false });
		try {
			const response = await fetch(UPDATE_URL, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				mode: 'cors',
				credentials: 'include',
				body: JSON.stringify({ email: this.state.email, gstNum: this.state.gstNum })
			});

			if (response.status >= 400) {
				this.setState({ error: true });
			}
		} catch (err) {
			this.setState({ error: true });
		}
	};

	render() {
		return (
			<div>
				{this.state.error ? (
					<PopUp
						message="Setting is not updated"
						handleOk={() => {
							this.setState({ error: false });
						}}
						onClose={() => {
							this.setState({ error: false });
						}}
					/>
				) : (
					''
				)}
				{this.state.update ? (
					<PopUp
						label="Update Admin?"
						message={MESSAGE}
						handleCancel={() => {
							this.setState({ update: false });
						}}
						onClose={() => {
							this.setState({ update: false });
						}}
						handleOk={this.onUpdate}
					/>
				) : (
					''
				)}
				<Setting
					info={this.state.info}
					onUpdate={() => {
						this.setState({ update: true });
					}}
					setGTSNum={this.setStateValue('gstNum')}
					setPassword={this.setStateValue('password')}
					onBackUp={() => {
						this.props.history.push('/admin/backup');
					}}
				/>
			</div>
		);
	}
}

export default withRouter(SettingContainer);

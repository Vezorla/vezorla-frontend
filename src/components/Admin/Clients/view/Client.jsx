import React from 'react';
import LoadingHOC from '../../../common/HOC/LoadingHOC';

const ClientCard = ({ clientId, name, email }) => {
	return (
		<div>
			<h1>Client ID - {clientId}</h1>
			<h2>Name</h2>
			<p>{name}</p>
			<h2>Account E-Mail</h2>
			<p>{email}</p>
		</div>
	);
};

 function ClientComponent({list}) {
	return <div >
        {list?.map((client) => (
            <ClientCard {...client}/>
        ))}
    </div>;
}

const Client = (props) => {
	return LoadingHOC(ClientComponent)({ ...props, message: 'something went wrong with loading client list' });
};
export default Client;
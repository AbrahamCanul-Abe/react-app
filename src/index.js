import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting, UserCard } from './Greeting';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<>
		<Greeting />
		<UserCard />
	</>
);

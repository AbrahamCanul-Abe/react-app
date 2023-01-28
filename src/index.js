import React from 'react';
import ReactDOM from 'react-dom/client';
import { Greeting, UserCard } from './Greeting';
import Product, { Navbar } from './Product';
import { Button } from './Button';
import { TaskCard } from './Task';
import { Posts } from './Posts';

const root = ReactDOM.createRoot(document.getElementById('root'));

const user = [
	{
		id: 1,
		name: 'Ryan Ray',
		image: 'https://robohash.org/user1',
	},
	{
		id: 2,
		name: 'John Smith',
		image: 'https://robohash.org/user2',
	},
	{
		id: 3,
		name: 'Marcos',
		image: 'https://robohash.org/user3',
	},
];

root.render(
	<>
		{user.map((user, i) => {
			return (
				<div key={i}>
					<h1>{user.name}</h1>
					<img src={user.image} />
				</div>
			);
		})}
	</>
);

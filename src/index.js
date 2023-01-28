import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Greeting, UserCard } from './Greeting';
import Product, { Navbar } from './Product';
import { Button } from './Button';
import { TaskCard } from './Task';
import { Posts } from './Posts';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Mensaje() {
	const [mensaje, setMensaje] = useState('');

	useEffect(() => {
		console.log('render');
	}, []);

	return (
		<div>
			<input
				onChange={(e) => {
					setMensaje(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					alert('El mensaje es:  ' + mensaje);
				}}
			>
				save
			</button>
		</div>
	);
}

root.render(
	<>
		<Mensaje />
	</>
);

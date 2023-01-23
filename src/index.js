import React from 'react';
import ReactDOM from 'react-dom/client';
import { Greeting, UserCard } from './Greeting';
import Product, { Navbar } from './Product';
import { Button } from './Button';
import { TaskCard } from './Task';

const root = ReactDOM.createRoot(document.getElementById('root'));

const handleSubmit = (e) => {
	e.preventDefault();
	alert('enviado');
};

root.render(
	<>
		<TaskCard ready={true} />

		<Button text="saludar" />

		<form onSubmit={handleSubmit}>
			<h1>Registro de usuario</h1>
			<input type="submit"></input>
		</form>
	</>
);

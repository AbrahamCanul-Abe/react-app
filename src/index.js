import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting, UserCard } from './Greeting';
import Product, { Navbar } from './Product';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<>
		<Greeting title="hola Mundo" name="joe" />
		<Greeting title="hola React" name="ryan" />
		<Greeting title="hola JS" />
		<Greeting title="hola JSX" />
		<Greeting title="hola ABE" />
	</>
);

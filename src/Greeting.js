export function Greeting({ title, name = 'user' }) {
	console.log(title, name);
	return <h1>{title}</h1>;
}

export function UserCard() {
	return <h1>User card</h1>;
}

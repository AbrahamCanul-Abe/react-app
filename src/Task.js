export function TaskCard() {
	const cardStyles = { background: '#202020', color: '#fff', padding: '20px' };
	const titleStyle = { fontWeight: 'lighter' };
	return (
		<div style={cardStyles}>
			<h1 style={titleStyle}>Mi primer Tarea</h1>
			<p>Tarea Realizada</p>
		</div>
	);
}

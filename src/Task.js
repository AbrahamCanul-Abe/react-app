import './task.css';

export function TaskCard({ ready }) {
	return (
		<div className="card">
			<h1>Mi primer Tarea</h1>
			<span className={ready ? 'bg-red' : 'bg-green'}>
				{ready ? 'Tarea realizada' : 'Tarea pendiente'}
			</span>
			{/* if ready es true */}
		</div>
	);
}

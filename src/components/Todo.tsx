import { useState } from "react";
import { useSnapshot } from "valtio";
import { editTodo, removeTodo, store } from "../store";

const Todo = () => {
	const snap = useSnapshot(store);
	const [isEdit, setIsEdit] = useState(false);

	return (
		<div style={{marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: '1138px',
		padding: '1em 1em',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly'}}>
			{snap.todos
				.map(({ name, description, id }, index) => {
					return (
						<div key={id}>
						{
							isEdit ?
							<>
							<hr />
							<label htmlFor="Name">Nombre</label>
							<input
									type="text"
									value={name}
									onChange={(e) => {
											editTodo(index, e.target.value, description)
									}}
									/>
									<br />

									<label htmlFor="Name">Descripción</label>
							<input
									type="text"
									value={description}
									onChange={(e) => {
											editTodo(index, name, e.target.value)
									}}
									/>
									<br />
							</>
							:
							<>
							<div className="card">
							<div className="card-body">
								<div className="d-flex justify-content-between align-items-center">
								<h5 className="card-title">{name}</h5>
									</div>
									
									<p className="lead">{description}</p>
							</div>
						</div>
							</>
						}
					<button className="btn btn-dark m-1"
					onClick={() =>
						setIsEdit(isEdit => !isEdit)
					}>
						Editar
					</button>
					<button className="btn btn-danger" onClick={() => {
							removeTodo(index)
							}}>
						Eliminar
					</button>
				</div>
			);
		})}
	</div>
);
};

export default Todo
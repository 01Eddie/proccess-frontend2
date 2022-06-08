import { useCallback, useRef } from "react";
import { addTodo } from "../store";

const CreateUser = () => {
    const inputNameRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);

    const _handleSubmit = useCallback((e: any) => {
    const name = inputNameRef.current?.value || "";
    const description = inputEmailRef.current?.value || "";

    if (name === "" || description === "") {
        alert("Please fill all fields");
        return;
    }
    addTodo(name, description);
    }, [])

    return (
    <div className="card p-3" style={{marginBottom: 20}}>
    <h1>Servicio</h1>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Nombre</label>
        <input className="w-100 p-2 m-2" id="name" name="Name" type="text" minLength={2} ref={inputNameRef} placeholder="Nombre" />
    </div>
    <div className="mb-3">
        <label htmlFor="description" className="form-label">Descripcion</label>
        <input className="w-100 p-2 m-2" id="description" name="Description" type="text" minLength={2} ref={inputEmailRef} placeholder="Descripcion" />
    </div>
    <div className="card-footer p-3">
        <button
        className="btn btn-outline-success"
        onClick={_handleSubmit}>
        Grabar
        </button>
        </div>
      </div>
    );
}

export default CreateUser
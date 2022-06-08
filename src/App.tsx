import React from 'react';
import CreateUser from './components/CreateUser';
import Todo from './components/Todo';

const App= () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center p-5">
      <h1 className='text-center' style={{ marginTop: 20 }}>Servicios</h1>
    <div className="d-flex flex-row mb-3">
      <div className="p-2">Todos</div>
      <div className="p-2">Autos</div>
      <div className="p-2">Salud</div>
      <div className="p-2">Hogar</div>
    </div>
      <CreateUser />
      <Todo />
    </div>
  );
}

export default App;

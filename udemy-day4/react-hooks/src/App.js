import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <div>
        <h3 style={{textAlign: 'center', paddingTop:'100px', fontSize:'20px', color:'Red'}}>React Hooks</h3>
        <TodoList />
      </div>
    </>
  );
}

export default App;

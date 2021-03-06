import React from 'react';
import Todo from './todo';

function TodoList({ todos, setTodos }){

return(
    
    <div className="todo-container">
      <ul className="todo-list">
          {todos.map(todo => (
              <Todo setTodos ={setTodos} todos ={todos} key={todo.id} text={todo.text} todo={todo} id={todo.text}/>
          ))}
      </ul>
      
    </div>
);
};

export default TodoList;
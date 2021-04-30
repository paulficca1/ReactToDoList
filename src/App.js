import React, { useState } from 'react';
import './App.css';
import Form from "./components/form"
import TodoList from "./components/todoList"

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Todo List using React js</h1>
      </header>
      <Form todos ={todos} setTodos ={setTodos} inputText ={inputText} setInputText = {setInputText}/>
      <TodoList setTodos ={setTodos} todos ={todos} />
    </div>
  );
}

export default App;

import React from 'react';


function Form({todos, setTodos, inputText, setInputText}){
    //here I can write some javscript...
    function inputTextHandler(e){
        
        setInputText(e.target.value)
    };
    function submitTodoHandler(e){
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, completed: false, id: Math.random()}
        ])
        setInputText("")
    }
    
    return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler}className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
};

export default Form;

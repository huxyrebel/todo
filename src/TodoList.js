import React, { useState } from 'react';
import TodoForm from './Todoform';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  // after|| ka matlab yay hay kay agar multiple space aa gayen to unhain single space consider karay ga
//jo hum likhain gay wo idaar say return ho kar newTodos may chala jay ga
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    //iskay pass current or previous todos ka record hoga settodos may naya task enter hoga or console par previous added show karay ga
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  //yay update karay ga previous todos ko or update karay ga through newValue 
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    //map kar raha hay pichlay todos ko with the help of their id 
    //aik new array print karay ga saray items show karay ga jo new hain or jo puranay hain
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  //remove kar raha hay todos ko using filter and in filter we are giving the todo id
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  //jitnay complete ho gay hain unkay record ko lay kar chal raha hay
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
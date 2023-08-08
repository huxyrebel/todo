import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    //waisay to sai aa jay ge value but id edited than it will come into props.edit state
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  //yay focus karay ga input field ko jab hum open karain gay page
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };
//refresh honay say bachata
  const handleSubmit = e => {
    e.preventDefault();

    //jab add todo ho ga to yay value or aik random id generate karay ga
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    //props.edit ? option day raha hay if we want to edit todo
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>

        
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
import React, { useState } from 'react';
import styles from './Todolist.module.css';
import styled from 'styled-components';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [completeTodoList, setCompleteTodoList] = useState([]);

  const Circle = styled.div`
    background-color: purple;
    width: 300px;
    height: 300px;
    border-radius: 50%;
  `;

  const onchangeValue = (e) => {
    setInputValue(e.target.value);
  };
  const onclickSubmitButton = () => {
    if (inputValue === '') {
      return;
    }
    setTodoList([inputValue, ...todoList]);
    setInputValue('');
  };
  const onclickDeleteButton = (e) => {
    console.log(todoList);
    console.log(typeof e.target.parentElement.id);

    const newTodoList = todoList.filter(
      (element, index) =>
        index !== parseInt(e.target.parentElement.parentElement.id)
    );
    console.log(newTodoList);
    setTodoList(newTodoList);
  };
  const onclickCompletButton = (e) => {
    // 완료 버튼 클릭 했을 때 호출
    const completeTodoList =
      todoList[parseInt(e.target.parentElement.parentElement.id)];
    setCompleteTodoList((prevCompleteTodoList) => [
      completeTodoList,
      ...prevCompleteTodoList,
    ]);
    const newTodoList = todoList.filter(
      (element, index) =>
        index !== parseInt(e.target.parentElement.parentElement.id)
    );
    setTodoList(newTodoList);
  };

  return (
    <>
      <Circle />
      <div className={styles.TodolistLayout}>
        <div className={styles.todolistForm}>
          <div>
            <input
              type="text"
              value={inputValue}
              onChange={onchangeValue}
              placeholder="할 일을 입력 해주세요."
              className={styles.input}
            />
            <button
              onClick={onclickSubmitButton}
              className={styles.submitButton}
            >
              submit!
            </button>
          </div>
          <div className={styles.todolist}>
            <ul style={{ margin: 0, padding: 0 }}>
              {todoList.length === 0
                ? null
                : todoList.map((element, index) => {
                    return (
                      <li id={index} className={styles.li}>
                        <div>{element} </div>

                        <div>
                          <button
                            className={styles.button}
                            onClick={onclickDeleteButton}
                          >
                            X
                          </button>
                          <button
                            className={styles.button}
                            onClick={onclickCompletButton}
                          >
                            완료!
                          </button>
                        </div>
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>

        <div>
          <h1>{completeTodoList.length === 0 ? null : '완료된 TodoList'}</h1>
          <ul>
            {completeTodoList.length === 0
              ? null
              : completeTodoList.map((element) => {
                  return <li className={styles.li}>{element}</li>;
                })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoList;

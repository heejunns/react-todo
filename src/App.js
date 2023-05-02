import React, { useEffect, useState } from 'react';

import styles from './App.module.css';
import Header from './Header.js';
import TodoList from './Todolist';
function App() {
  return (
    <div className={styles.app}>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;

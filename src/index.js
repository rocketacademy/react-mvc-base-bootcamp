import './styles.scss';
console.log('hello');

import React from 'react';
import { render } from 'react-dom';

import Counter from './components/counter.jsx';

function App() {
  return (
    <div className="react">
      <p>Welcome to my react app!</p>
      <Counter />
    </div>
  );
}

render(
  <App />,
  document.body.appendChild(document.createElement("div"))
);

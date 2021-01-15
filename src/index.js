import './styles.scss';

import React from 'react';
import { render } from 'react-dom';

import Counter from './components/counter.jsx';

console.log('hello');

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
  document.body.appendChild(document.createElement('div')),
);

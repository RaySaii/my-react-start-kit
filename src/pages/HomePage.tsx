import React from 'react';
import { Link } from 'react-router-dom'
import { H1 } from '../styles/index';
import _ from 'lodash';

_.isEqual(1, 1)
const HomePage = () => {
  return (
    <div>
      <H1>React is great!!!</H1>
      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="/Todo">Todo</Link></li>
      </ol>
    </div>
  );
};

export default HomePage;

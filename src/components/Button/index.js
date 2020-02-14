import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export const Button = ({ to, children }) => (
  <Link to={to} className="btn">
    {children}
  </Link>
);

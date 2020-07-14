import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

type ButtonProps = {
  to: string;
  children: React.ReactNode;
};

export const Button = ({ to, children }: ButtonProps) => (
  <Link to={to} className="btn">
    {children}
  </Link>
);

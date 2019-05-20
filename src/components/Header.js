import React from 'react';
import Link from 'react-router-dom';

export default function Header(){
  return (
    <header>
      <nav>
        <Link to="/blue">Blue</Link>
        <Link to="/green">Green</Link>
        <Link to="/purple">Purple</Link>
      </nav>
    </header>
  );
}

import React from 'react';

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1 className="jumbotron-title">Welcome to my landing page</h1>
      <p className="jumbotron-text">
        This is a simple landing page created with React JS.
      </p>
      <a href="#features" className="btn btn-primary">
        Learn more
      </a>
    </div>
  );
}

export default Jumbotron;
import React from 'react';

function Experiment1() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Bootstrap UI Experiment
      </h2>

      <div className="card p-3 mb-3">
        <h5 className="card-title">Login Form</h5>

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Username"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />

        <button className="btn btn-primary w-100">
          Login
        </button>
      </div>
    </div>
  );
}

export default Experiment1;

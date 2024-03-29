import React, { useState, useEffect } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fristName, setFristName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  useEffect(() => {
    console.log('email change', email)
  }, [email])

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={fristName} onChange={(e) => setFristName(e.target.value)} />
        </div>

        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;
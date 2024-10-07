import React, { useState } from 'react';
import { register } from '../services/authService';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = { email, password };
      const response = await register(data);
      console.log('Registered successfully:', response);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

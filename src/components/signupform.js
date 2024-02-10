import React, { useState } from 'react';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // ... (Similar state variables for other form fields)

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, /* ...other fields */ }),
      });

      if (response.ok) {
        // Signup successful (redirect, etc.)
        console.log('User created successfully!');
      } else {
        // Handle error -  read error message from the response
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for name, email, college, etc. */}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;

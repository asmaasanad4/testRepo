import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  const [user, setUser] = useState({ email: '', password: '' });

  const Login = details => {
    setUser({
      email: details.email,
      password: details.password
    })
  };

  const LogoutHandler = () => {
    setUser({ email: '', password: '' });
  };

  return (
    <div className="App">
      <header className="App-header">
        {(user.email) ? (
          <div>
            <h2>Welcome, <span>{user.email}</span></h2>
            <button onClick={LogoutHandler}>Logout</button>
          </div>
        ) : (
          <div>
            <h1>Login</h1>
            <LoginForm Login={Login} />
          </div>)
        }
      </header>
    </div>
  );
}

export default App;

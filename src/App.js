import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  const admin = {email: 'asmaa@as.com', password: '1234'}
  const [user, setUser] = useState({ email: '', password: '' });
  const [error,setError]= useState(true);

  const Login = details => {
    if(details.email=== admin.email&& details.password=== admin.password){
      setError(false);
      setUser({
        email: details.email,
        password: details.password
      });
    }else{
      setError(true);
    }
  };

  const LogoutHandler = () => {
    setError(true);
    setUser({ email: '', password: '' });
  };

  return (
    <div className="App">
      <header className="App-header">
        {(error) ? (
          <div>
          <h1>Login</h1>
          <LoginForm Login={Login} />
          {(error)? <div>error </div> :<div></div>}
        </div>
          
        ) : ( 
          <div>
            <h2>Welcome, <span>{user.email}</span></h2>
            <button onClick={LogoutHandler}>Logout</button>
          </div>
          )
        }
      </header>
    </div>
  );
}

export default App;

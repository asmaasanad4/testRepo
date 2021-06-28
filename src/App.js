import React,{useState} from 'react';
import { Container, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import HomePage from './components/HomePage';


function App() {
   const [user, setUser] = useState([{ email: '', password: '' }]);
   const [doneLogin, setDoneLogin] = useState('');

   const history = useHistory();

   const signup = userDetails =>{
     console.log(userDetails.email,userDetails.password)
     setUser([{
       email: userDetails.email,
       password: userDetails.password
     }]);
     user.map((key) => console.log(key));
   };
   const Login = loginDetails =>{
      if(loginDetails.email=== user.email && loginDetails.password=== user.password){
        setDoneLogin('Done');
      }
     
   };
   const onClick =() =>{
     console.log(doneLogin);
     console.log('ddddddddddd');
     if(doneLogin){
     console.log('ddddddddddd');
       history.push("/Home");
     }
   };

  // const [error,setError]= useState(true);

  // const Login = details => {
  //   if(details.email=== admin.email&& details.password=== admin.password){
  //     setError(false);
  //     setUser({
  //       email: details.email,
  //       password: details.password
  //     });
  //   }else if(details.email=== ''&& details.password=== '' ){
  //     setError(true);
  //   }
  // };

  // const LogoutHandler = () => {
  //   setError(true);
  //   setUser({ email: '', password: '' });
  // };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
    <div className="w-100" style={{ maxWidth: "400px" }}>
    <Router>
      <Switch>
          <Route path="/Signup">
            <Signup signup={signup}/>
          </Route>
          <Route path="/Home">
            <HomePage />
          </Route>
          <Route path="/">
            <LoginForm Login={Login} />
            <Button className="w-100" onClick={onClick}  >Login</Button>
          </Route>
        </Switch>
    
      {/* <header className="App-header">
        {(error) ? (
          <div>
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
      </header> */}
   
    </Router>
    </div>
    </Container>
   
  );
}

export default App;

import React,{useState} from 'react';
import { Container} from 'react-bootstrap';
// import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import HomePage from './components/HomePage';


function App() {
   const [user, setUser] = useState({ email: '', password: '' });
  //  const success = useSelector(state => state.fReducer.loginSuccess);
  //  console.log(success);
  

   //const history = useHistory();

  //  const users = useSelector(state => state.fReducer.avilableUsers);
  //  console.log(users);

   const signup = userDetails =>{
     setUser({
       email: userDetails.email,
       password: userDetails.password
     });
   };
  //  const Login = () =>{
  //    console.log(success);
  //    if(success){
  //      history.push("/Home");
  //    }
     
  //  };
  
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
    <div className="w-100" style={{ maxWidth: "400px" }}>
    <Router>
      <Switch>
          <Route path="/Signup">
            <Signup signup={signup}/>
          </Route>
          <Route path="/Home">
            <HomePage user={user}/>
          </Route>
          <Route path="/" >
            <LoginForm  />
          </Route>
        </Switch>
    </Router>
    </div>
    </Container>
   
  );
}

export default App;

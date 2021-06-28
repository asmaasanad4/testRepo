import React from 'react';
import { Card, Button, FormLabel } from 'react-bootstrap';
import {  useHistory } from 'react-router-dom';



const Signup = (props) => {
    const history= useHistory();

    const onClick = () => {
        history.push("./");
    };

    return (
       
         <Card>
             <Card.Body>
                 <FormLabel>Home</FormLabel>
                 <Button className="w-100" onClick={onClick} > Logout</Button>
             </Card.Body>
         </Card>
         
    )
}

export default Signup;
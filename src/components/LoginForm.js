import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const LoginForm = (props) => {
    const [form, setForm] = useState({ email: '', password: '' });

    const onChangeHandler = (e) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = () => {
       props.Login(form);
    };

    return (
        <div>
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                <Form onSubmit={submitHandler} >
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required id="email" name="email" onChange={onChangeHandler} value={form.email || ''}  />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required id="password" name="password" onChange={onChangeHandler} value={form.password || ''}  />
                    </Form.Group>
                    
                </Form>
                <div className="w-100 text-center mt-2" >
                        Need an account?  <Link to="/Signup" >Sign Up</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default LoginForm;
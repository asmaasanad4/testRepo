import React,{useState, useCallback} from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import {  useDispatch } from 'react-redux';

// import * as action from '../store/action';

const Signup = (props) => {
    const [form, setForm] = useState({ email: '', password: '' });

    const history= useHistory();
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler =useCallback( (e) => {
        e.preventDefault();
        // dispatch(action.add(form.email, form.password));
        history.push("/");
    },[dispatch, form.email, form.password, history]);


    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign up</h2>
                    <Form onSubmit={submitHandler}>
                        <Form.Group id="email">
                            <Form.Label >Email</Form.Label>
                            <Form.Control type="email" required  id="email" name="email" onChange={onChangeHandler} value={form.email || ''} />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label >Password</Form.Label>
                            <Form.Control type="password" required id="password" name="password" onChange={onChangeHandler} value={form.password || ''}  />
                        </Form.Group>
                        <Button className="w-100" type="submit">Sign Up</Button>
                    </Form>
                    <div className="w-100 text-center mt-2" >
                        Aleady have an account? <Link to="/Login" >Log In</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Signup;
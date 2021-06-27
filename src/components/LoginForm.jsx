import React, { useState } from 'react';
import { connect,useDispatch } from 'react-redux';

import './Login.css';

const LoginForm = (props) => {
    const dispatch= useDispatch();
    const [form, setForm] = useState({ email: '', password: '' });

    const onChangeHandler = (e) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    const onClickhandler = () => {
        if (form.password && form.email) {
        }
    };
    const submitHandler = () => {
        props.Login(form);
    };

    return (
        <form onSubmit={submitHandler} className="con">
            <div  className="inp">
                <div >
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" onChange={onChangeHandler} value={form.email || ''} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" onChange={onChangeHandler} value={form.password || ''} />
                </div>
                
            </div>
            <button className="but" onClick={onClickhandler} >Login</button>
        </form>
    );
}

export default connect(LoginForm);
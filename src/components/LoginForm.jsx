import React, { useState } from 'react';
import './Login.css';

const LoginForm = (props) => {
    const [form, setForm] = useState({ email: '', password: '' });
    // const [data, setData] = useState(false);

    const onChangeHandler = (e) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    const onClickhandler = () => {
        if (form.password && form.email) {
            // setData(true);
        }
    };
    const submitHandler = () => {
        props.Login(form);
    };

    return (
        <form onSubmit={submitHandler} className="con">
            <div >
                <div className="inp">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" onChange={onChangeHandler} value={form.email || ''} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" onChange={onChangeHandler} value={form.password || ''} />
                </div>
                <button onClick={onClickhandler} >Login</button>
                {/* <input type="submit" value="SUBMIT" />
                {data ? <div>
                    <p>
                        {form.email}
                    </p>
                    <p> {form.password}</p>
                </div> : <div> No Data</div>} */}
            </div>
        </form>
    );
}

export default LoginForm;
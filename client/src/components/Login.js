// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [benutzername, setBenutzername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleChangeBenutzername = (e) => {
        setBenutzername(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const login = () => {
        axios.post("http://localhost:8800/login", { 
            benutzername: benutzername,
            password: password,
        }).then((response) => {
            console.log(response);
            navigate("/dashboard");
        }).catch((error) => {
            console.log(error.response.data);
        });
    }

    return (
        <div className='Login'>
            <h1>Anmelden</h1>
            <label>Benutzername:</label>
            <br />
            <input name='benutzername' type="text" onChange={handleChangeBenutzername} />
            <br />
            <label>Password:</label>
            <br />
            <input name='password' type='password' onChange={handleChangePassword} />
            <br />
            <button onClick={login}>Anmelden</button>
            <p>Du hast noch keinen Account dann melde dich bitte bei deinem IT-Administrator an der Schule.</p>
        </div>
    )
}

export default Login;

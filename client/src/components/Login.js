import React, { useState } from 'react'
import axios from 'axios';

function Login() {
  const [benutzername, setBenutzername] = useState("")
  const [password, setPassword] = useState("");

  const handleChangeBenutzername = (e) => {
    setBenutzername(e.target.value);
    console.log(benutzername);
  }

  const handleChangePassword = (e) => {
    setBenutzername(e.target.value);
    console.log(benutzername);
  }


  const login = () => {
    axios.post("http://localhost:8800/login/", {
      benutzernamename: benutzername,
      password: password,
    }).then((response) => {
      console.log(response);
    })
  }

  return (
    <div className='Login'>
        <h1>Anmelden</h1>
        <label>Benutzername:</label>
        <br />
        <input name='benutzername' type="text" onChange={handleChangeBenutzername} />
        <br />
        <label>Email:</label>
        <br />
        <input name='password' type='password' onChange={handleChangePassword}/>
        <br />
        <button onClick={login}>Anmelden</button>
        <p>Du hast noch keinen Account dann melde dich bitte bei deinem IT-Administrator an der Schule.</p>

    </div>
  )
}

export default Login;
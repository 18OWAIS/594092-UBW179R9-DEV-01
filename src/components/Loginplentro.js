import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
// import "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"


const Login = () => {

  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async (e) => {
    e.preventDefault();
    loginplentropistdata();
  }

  const loginplentropistdata = async () => {

    const res = await fetch('http://localhost:5000/api/philanthropic/login', {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        email, password
      })
    });

    const data = await res.json();

    if (data.status === 400 || !data) {
      window.alert("Invalid Credentials")
    }
    else {

      // console.log(data);
      window.alert("Login Successful");
      history.push(`/dashboard/${data._id}`);
    }
  }

  return (
    <main className="form-signin w-100 m-auto">
      <form id="form">


        <h1 className="h3 mb-3 fw-normal">Signup to Account</h1>

        <div className="form-floating">
          <input type="type" name="email" className="form-control top" placeholder="username"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
          <label for="floatingInput">Username</label>
        </div>

        <div className="form-floating">
          <input type="password" name="password" className="form-control last" placeholder="password"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div>
          <NavLink to='/register1'>Not registered/Registerd Here</NavLink>
        </div>

        <input className="w-100 btn btn-lg btn-primary" type="submit" value="Login" onClick={loginUser} />
        <p className="text-muted" id="copy">&copy; 2022-2023 </p>
      </form>
    </main>
  )
}

export default Login
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import fireDb from './Firebase';

function Login() {

  const [user, setUser] = useState({
    email: "", password: ""
  })
  const navigate = useNavigate()

  const onchange = (e) => {
    setUser({
      ...user, [e.target.name]: e.target.value
    })
  }

  const auth = getAuth();
  const loginuser = () => {

    const { email, password } = user
    console.log(email);
    console.log(password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('login successfully')
        navigate('/home')

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('not happening')
      });

  }

  return (
    <div className='App'>

      <div className="container">
        <h2 className="text-center mb-4">Login Form</h2>
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card p-5">
              <form>
                <div className="form-group">
                  <label className='py-2' htmlFor="email">EMAIL</label>
                  <input type="text" className="form-control" onChange={onchange} name='email' placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label className='py-2' htmlFor="password">PASSWORD</label>
                  <input type="password" className="form-control" onChange={onchange} name='password' placeholder="Enter your password" required />
                </div>
                <button type="button" onClick={loginuser} className="btn btn-primary btn-block mt-5">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
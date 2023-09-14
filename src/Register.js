import React, { useState } from 'react'
import fireDb from './Firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify'




function Register() {

    const auth = getAuth();
    const [ser, setser] = useState({
        email: "", password: ""
    })

    const navigate = useNavigate()

    const onchange = (e) => {
        setser({
            ...ser
            , [e.target.name]: e.target.value
        })
    }

    const registeruser = () => {
        const { email, password } = ser
        // const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert("added")
                // toast.success('registerd succesfully ')
                // toast.success("registered successfully")
                navigate('/login')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert("not happening")
                // ..
            });
    }
    return (
        <div className='App'>
            <div className="container">
                <h2 className="text-center mb-4">Registration Form</h2>
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
                                <button type="button" onClick={registeruser} className="btn btn-primary btn-block mt-5">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register
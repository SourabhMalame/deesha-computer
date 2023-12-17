import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    let dispatch = useDispatch();
    let state = useSelector(state => state.user)
    console.log(state.logindata);
    let navigate = useNavigate()

    let readData = (event) => {

        let { name, value } = event.target;
        console.log(name, value)

        dispatch({ type: "LOGIN_DATA", payload: { name: name, value: value } })

    }
    let loginUser = () => toast.success("Login Successfull")


    let CheakUser = () => {
        axios.get(`http://localhost:8000/students/?email=${state.logindata.email}&password=${state.logindata.password}`)
            .then(res => {
                console.log(JSON.stringify(res, null, 3))
                if (res.data == "") {
                    window.alert("User Not Found");
                } else {
                    loginUser();
                    setInterval(() => {
                        navigate("/courses")
                    }, 3000)
                }
            })
            .catch(err => {
                console.log(err)
            })


    }


    return (
        <section className="bg-light">
            <ToastContainer position="top-center" />

            <div className="container p-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className=" card-body p-md-5 mx-md-4">
                                        <div className="text-center">
                                            <img className='col-3' src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                alt="logo" />
                                            <h4 className="mt-1 mb-5 pb-1">We are The Deesha Team</h4>
                                        </div>
                                        <form >
                                            <p className='mb-4'>Please login to your account</p>

                                            <div className="form-outline mb-3">
                                                <input className='col-lg-12 p-2 small' type="text" name='email' placeholder="Enter Your Email address" onChange={readData} />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input className='col-lg-12 p-2 mx-auto small' type="text" name='password' placeholder="Enter Your Password" onChange={readData} />
                                            </div>

                                            <div className="text-center d-flex justify-content-between pt-1 mb-5 pb-1">
                                                <button className="btn btn-primary col-5 rounded-pill small" type="button" onClick={CheakUser}>Login</button>

                                                <a className="text-muted small" href="/forgotpassword">Forgot password?</a>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2 small">Don't have an account?</p>
                                                <a class="btn btn-primary col-6 rounded-pill" href="/register" role="button">Create New</a>

                                            </div>

                                        </form>
                                        <hr />

                                        <div className="col-12">
                                            <a href='/adminlogin' className='btn btn-primary rounded-pill small col-12'>Admin Login</a>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center">
                                    <div className=" px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">
                                            We are more than just a company</h4>
                                        <p className="small mb-0 text-justify">
                                            Driven by a commitment to excellence, Deesha Computer fosters an environment that encourages creativity, critical thinking, and problem-solving abilities. Through comprehensive courses, expert guidance, and state-of-the-art resources, the institute aims to empower students to become adept professionals capable of tackling real-world challenges and contributing meaningfully to the ever-evolving field of technology.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Login

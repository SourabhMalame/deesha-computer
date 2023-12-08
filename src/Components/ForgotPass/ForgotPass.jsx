import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ForgotPassword = () => {

    let dispatch = useDispatch();

    let state = useSelector(state => state.user);

    let readData = (event) => {

        let { name, value } = event.target;


        dispatch({ type: "FORGOT_PASS_DATA", payload: { name: name, value: value } })


    }

    let readPass = (event) => {

        let { name, value } = event.target;


        dispatch({ type: "FORGOT_PASS_DATA", payload: { name: name, value: value } })


    }


    let CheakUserExist = () => {

        axios.get(`http://localhost:8000/students/?email=${state.forgotpass.email}`)
            .then(res => {


                axios.put(`http://localhost:8000/students/${res.data[0].id}`, { ...res.data[0], password: state.forgotpass.password, confirmPassword: state.forgotpass.password })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <div className="row bg-light p-5">

            <div className='col-6 mx-auto border rounded p-5 bg-white '>
                <div className="text-center">
                    <h2>Forgot Password</h2>
                    <p>Please enter your email address to reset your password.</p>
                </div>
                <div className="mt-4">
                    <input className='col-12 p-2' type="text" name="email" placeholder='Please enter email' onChange={readData} />
                    <br />
                    {/* {state.forgotpass.status
                        ? */}
                    <input className='col-12 p-2 mt-4' type="text" name="password" placeholder='Please enter New password' onChange={readPass} />
                    {/* :
                        false} */}

                    <button className='btn btn-primary mt-4 rounded-pill' onClick={CheakUserExist}> Reset Password </button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;

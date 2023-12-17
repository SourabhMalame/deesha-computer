import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    let dispatch = useDispatch();
    let state = useSelector(state => state.user)
    let navigate = useNavigate();

    let readData = (event) => {
        let { name, value } = event.target;

        dispatch({ type: "ADMIN_LOGIN", payload: { name: name, value: value } })
    }

    let adminLoginToast = () => toast.success("Login SuccessFull")
    let cheackAdmin = () => {

        axios.get(`http://localhost:8000/admins/?email=${state.admin.username}&password=${state.admin.password}`)
            .then(res => {
                console.log(JSON.stringify(res, null, 3))
                if (res.data == "") {
                    window.alert("User Not Found");
                } else {
                    adminLoginToast();
                    setInterval(() => {
                        navigate('/admindashboard');
                    },4000)

                }
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (


        <div className="row bg-light p-5">
            <ToastContainer position='top-center' />
            <div className="col-lg-5 mx-auto border bg-white rounded p-2">

                <p className="h1">Admin Login</p>
                <hr />
                <input className='col-11 m-3 p-1 ' type="text" placeholder='Enter Email' name='username' onChange={readData} />
                <br />
                <input className='col-11 m-3 p-1' type="text" placeholder='Enter Password' name='password' onChange={readData} />
                <br />
                <input className='col-11 m-3 p-1' type="text" placeholder='admin key' name='adminkey' onChange={readData} />
                <button onClick={cheackAdmin} className='btn btn-primary col-4 m-3'>Login</button>
            </div>
        </div>

    );
};

export default AdminLogin;

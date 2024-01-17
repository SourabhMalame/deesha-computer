import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { json } from 'react-router-dom';

const AdminDashboard = () => {
    let state = useSelector(state => state.user)
    console.log(state)
    let dispatch = useDispatch();
    let AllUsers = null;

    useEffect(() => {
        axios.get('http://localhost:8000/students')
            .then(res => {
                dispatch({ type: "ALL_STUD_DATA", payload: res.data });
                dispatch({ type: "NUMBER_OF_STUD", payload: res.data.length })
            }).catch(err => {
                console.log(err)
            })
    }, [])

    let deleteData = (event) => {

        axios.delete(`http://localhost:8000/students/${event.target.id}`)
            .then(res => {
                window.location.reload('/admindashboard')
            })
            .catch(err => {
                console.log(err)
            })

    }


    return (

        <div className="main">
            <div className="box-cards">
                <div className="card col-4 m-5">
                    <div className="card-header">
                        <h1 key={state.student}> No Of Sundent : {state.student}</h1>

                    </div>
                </div>
            </div>
            <div className="main col-lg-12 table-responsive">
                <div className="col-lg-12 mx-auto">
                    <table className='table border mx-auto'>
                        <thead>
                            <tr>
                                <th >Id</th>
                                <th >Firstname</th>
                                <th >Lastname</th>
                                <th>Phone</th>
                                <th >Course</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.adminDashUser.payload &&
                                state.adminDashUser.payload.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.courses}</td>
                                            <td>{item.email}</td>
                                            <td><button id={item.id} onClick={deleteData} className='btn btn-danger'>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

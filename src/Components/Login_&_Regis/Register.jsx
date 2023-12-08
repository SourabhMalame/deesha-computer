import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const StaticForm = () => {

    let dispatch = useDispatch();
    let state = useSelector(state => state.user)

    let readData = (event) => {

        let { name, value } = event.target;

        dispatch({ type: "REGISTRATION_DATA", payload: { name: name, value: value } })

    }

    let addUser = () => {

        axios.post("http://localhost:8000/students", state.feilds)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err, null, 3)
            })
    }



    return (
        <Form className='row bg-light col-12 '>
            <div className="div p-5">
                {JSON.stringify(state, null, 3)}
            </div>
            <div className="div col-8 mx-auto bg-white p-5 rounded border  ">

                <h3 className='mb-3'>Register Here with deesha computer</h3>

                <hr className='px-5' />
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" name='firstName' onChange={readData} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="middleName">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Middle Name" name='middleName' onChange={readData} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" name='lastName' onChange={readData} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="dateOfBirth">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" name='dateOfBirth' onChange={readData} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" name='password' onChange={readData} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name='confirmPassword' onChange={readData} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" name='email' onChange={readData} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="course">
                            <Form.Label>Course</Form.Label>
                            <br />
                            <select onChange={readData} className='col-12 p-1 ' name="course" id="">
                                <option value="C Language">Choose Course</option>
                                <option value="C Language"> C Language</option>
                                <option value="Python Data Analyist"> Python Data Analyist</option>
                                <option value="Java Full Stack">Java Full Stack</option>
                                <option value="Mern Stack">Mern Stack</option>
                            </select>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="courseStartDate">
                            <Form.Label>Start Date of Course</Form.Label>
                            <Form.Control type="date" name='courseStartDate' onChange={readData} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="courseEndDate">
                            <Form.Label>End Date of Course</Form.Label>
                            <Form.Control type="date" name='courseEndDate' onChange={readData} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="aadharCardNumber">
                            <Form.Label>Aadhar Card Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Aadhar Card Number" name='aadharCardNumber' onChange={readData} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" placeholder="Enter Phone Number" name='phoneNumber' onChange={readData} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="education">
                            <Form.Label>Education</Form.Label>
                            <br />
                            <select onChange={readData} className='col-12 p-1 ' name="education" id="">
                                <option value="No">Education</option>
                                <option value="10th">10th</option>
                                <option value="12th">12th</option>
                                <option value="Graduation">Graduation</option>
                                <option value="B.Tech">B.tech</option>
                            </select>                        </Form.Group>
                    </Col>
                </Row>


                <Button variant="primary" type="submit" onClick={addUser} >
                    Submit
                </Button>
            </div>
            <div className="div p-5">

            </div>
        </Form>
    );
};

export default StaticForm;

import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const AdminLogin = () => {
    return (
        <Container className="m-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow">
                        <Card.Header className="bg-primary text-white text-center">
                            <h3>Admin Login</h3>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your username" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter your password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>AdminKey</Form.Label>
                                    <Form.Control type="Adminkey" placeholder="Enter your Admin key" />
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button variant="primary" size="lg">
                                        Login
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminLogin;

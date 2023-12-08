import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import Chart from 'react-apexcharts'; // You'll need to install this library to use charts

const AdminDashboard = () => {
    // Sample student data (replace this with actual data from your API or database)
    const students = [
        { id: 1, name: 'John Doe', age: 20, grade: 'A' },
        { id: 2, name: 'Jane Smith', age: 22, grade: 'B' },
        // Add more student data as needed
    ];

    // Sample data for chart (replace with your data)
    const chartOptions = {
        series: [44, 55, 13, 43],
        options: {
            chart: {
                type: 'chart',
            },
            labels: ['Full Stack', 'Tally', 'FrontEnd', 'DataAnalyist'],
        },
    };

    return (
        <Container  className="m-4 col-12">
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Chart
                                options={chartOptions.options}
                                series={chartOptions.series}
                                type="donut"
                                width="100%"
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='col-7'>
                    <Card>
                        <Card.Body>
                            <Card.Title>Student Information</Card.Title>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((student) => (
                                        <tr key={student.id}>
                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td>{student.age}</td>
                                            <td>{student.grade}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminDashboard;

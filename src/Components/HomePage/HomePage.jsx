import React from 'react'
import '../HomePage/HomePage.css'
import cardImg1 from "./HomePage Images/Card/Blue and White Illustration Social Media Marketing Facebook Post.jpg"
import { Card } from 'react-bootstrap';
import userImg from './HomePage Images/Placed images/Palced Usaer.jpg'


const HomePage = () => {

    const placedStudentsData = [
        {
            id: 1,
            name: 'John Doe',
            course: 'Full Stack Web Development',
            company: 'TechCo Solutions',
            jobTitle: 'Software Developer',
        },
        {
            id: 2,
            name: 'Jane Smith',
            course: 'Data Science and Analytics',
            company: 'Data Insights Inc.',
            jobTitle: 'Data Analyst',
        },
        {
            id: 3,
            name: 'Alex Johnson',
            course: 'Cybersecurity Specialist',
            company: 'SecureTech Systems',
            jobTitle: 'Security Engineer',
        },
        // Add more sample data for other placed students as needed
    ]


    return (

        <div className="container">


            <main className="mt-4 ">
                <div className="jumbotron">
                    <h1 className="display-4 fw-bold">Welcome To Deesha Computers! Where Quality Matters...</h1>
                    <p className="lead">
                        Providing quality education for all learners.
                        <br />
                        <span>
                            At Deesha, we strive to bridge the gap between education and industry requirements, fostering a learning environment that nurtures innovation, critical thinking, and practical skills essential for thriving in the dynamic landscape of Information Technology.
                        </span>

                        <b>Join us on a journey towards a rewarding and successful career in IT!</b>
                    </p>
                </div>
            </main>
            <hr className="my-4" />
            <p>
                <b>Explore our courses and enhance your knowledge.</b>
            </p>
            <hr className="my-4" />

            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={cardImg1} className="card-img-top" alt="Card 1" />
                            <div className="card-body">
                                <span class="badge bg-secondary m-2">Most Trending</span>

                                <h5 className="card-title">Java Full Stack Course</h5>
                                <p className="card-text">
                                    This is a sample card with some placeholder content. You can replace this text with your own content.
                                </p>
                                <a href=".." className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={cardImg1} className="card-img-top" alt="Card 2" />
                            <div className="card-body">
                                <span class="badge bg-secondary m-2">Most Trending</span>

                                <h5 className="card-title">Python Full stack / Data Analysis</h5>
                                <p className="card-text">
                                    Another sample card with some placeholder content. Customize this card as needed for your website.
                                </p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={cardImg1} className="card-img-top" alt="Card 3" />
                            <div className="card-body">
                                <span class="badge bg-secondary m-2">Most Trending</span>

                                <h5 className="card-title">MERN / MEAN Stack Course</h5>
                                <p className="card-text">
                                    Yet another sample card. You can add more cards and customize the layout, images, and content accordingly.
                                </p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={cardImg1} className="card-img-top" alt="Card 1" />
                            <div className="card-body">
                                <span class="badge bg-secondary m-2">Most Trending</span>

                                <h5 className="card-title">Java Full Stack Course</h5>
                                <p className="card-text">
                                    This is a sample card with some placeholder content. You can replace this text with your own content.
                                </p>
                                <a href=".." className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={cardImg1} className="card-img-top" alt="Card 2" />
                            <div className="card-body">
                                <span class="badge bg-secondary m-2">Most Trending</span>

                                <h5 className="card-title">Python Full stack / Data Analysis</h5>
                                <p className="card-text">
                                    Another sample card with some placeholder content. Customize this card as needed for your website.
                                </p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={cardImg1} className="card-img-top" alt="Card 3" />
                            <div className="card-body">
                                <span class="badge bg-secondary m-2">Most Trending</span>

                                <h5 className="card-title">MERN / MEAN Stack Course</h5>
                                <p className="card-text">
                                    Yet another sample card. You can add more cards and customize the layout, images, and content accordingly.
                                </p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <hr className="my-4" />
                <p>
                    <b>Meet Peoples From Deesha Who achieved great success in life</b>
                </p>
                <hr className='my-4' />
                <div className="row cols-3">
                    <Card className='col p-3 m-2'>
                        <Card.Img variant="top" src={userImg} alt="Person" />
                        <Card.Body>
                            <Card.Title>John Doe</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Software Engineer</Card.Subtitle>
                            <Card.Text>
                                Experience: 5 years
                                <br />
                                Subject: Web Development
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='col-lg p-3 m-2'>
                        <Card.Img variant="top" src={userImg} alt="Person" />
                        <Card.Body>
                            <Card.Title>John Doe</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Software Engineer</Card.Subtitle>
                            <Card.Text>
                                Experience: 5 years
                                <br />
                                Subject: Web Development
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='col p-3 m-2'>
                        <Card.Img variant="top" src={userImg} alt="Person" />
                        <Card.Body>
                            <Card.Title>John Doe</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Software Engineer</Card.Subtitle>
                            <Card.Text>
                                Experience: 5 years
                                <br />
                                Subject: Web Development
                            </Card.Text>
                        </Card.Body>
                    </Card>



                </div>
            </div>

            <hr className="my-4" />
            <p>
                <b>Some Key Features of our Institute</b>
            </p>
            <hr className='my-4' />

            <div className="Accordian mb-4">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Career-Oriented Training
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Deesha Computer might focus on providing career-oriented training programs that align with industry demands. This could include courses on software development, IT infrastructure, programming languages, cybersecurity, data analytics, or other areas relevant to the technology industry. These courses might emphasize practical skills, hands-on projects, and certifications that enhance employability.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                Job Placement & Assistance:
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                A significant aspect could involve helping students or participants secure job placements or internships after completing their courses. This could include career counseling, resume building, interview preparation, networking opportunities, and connections with industry partners or companies to facilitate job placements. Providing ongoing support and guidance in the job search process could be a vital feature.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                Technology Infrastructure and Resources
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Deesha Computer might boast modern infrastructure and resources necessary for effective learning in technology-related fields. This could include state-of-the-art computer labs, access to industry-standard software and tools, a well-stocked library or online resources, and possibly partnerships with tech companies to provide students with exposure to real-world applications and technologies.
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};



export default HomePage

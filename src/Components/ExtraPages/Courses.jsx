import React from 'react'
import cardImg1 from '../HomePage/HomePage Images/3d-render-code-testing-functional-test-usability.jpg'

const Courses = () => {
    return (
        <div className=' mt-3 py-2 px-5'>
            <h2>Job-Ready Courses at Deesha Computer</h2>

            <p>Looking to kickstart your career in the dynamic field of technology? Deesha Computer offers a comprehensive array of Job-Ready Courses designed to equip aspiring professionals with the essential skills and expertise sought after by today's industry leaders.</p>

            <ul>
                <li>
                    <strong>Full Stack Development:</strong> Dive into the world of web development, mastering both front-end and back-end technologies. Learn how to create responsive and interactive web applications using the latest frameworks and tools.
                </li>
                <li>
                    <strong>Data Analysis and Visualization:</strong> Explore the power of data by delving into data analysis techniques. Discover how to extract insights from large datasets, leverage statistical methods, and visualize data for informed decision-making.
                </li>
                <li>
                    <strong>Tally Prime for Accounting Professionals:</strong> Acquire proficiency in Tally Prime, a leading accounting software widely used across industries. Gain hands-on experience in managing accounts, financial statements, and taxation processes.
                </li>
                <li>
                    <strong>Cloud Computing Fundamentals:</strong> Understand the fundamentals of cloud computing, including its architecture, services, and deployment models. Learn how to leverage cloud technologies for scalability, security, and cost-efficiency in modern applications.
                </li>
                <li>
                    <strong>Data Analytics and Business Intelligence:</strong> Develop expertise in data analytics tools and methodologies crucial for driving business insights. Learn how to analyze complex data sets, create reports, and make data-driven decisions.
                </li>
            </ul>

            <p>Our Job-Ready Courses combine theoretical knowledge with practical application, ensuring that graduates are well-prepared to meet the demands of the ever-evolving tech industry. Taught by experienced instructors and enhanced with hands-on projects, these courses pave the way for successful and fulfilling careers in technology.</p>
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

        </div>
    )
}

export default Courses

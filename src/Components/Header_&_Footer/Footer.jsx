import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-dark text-white p-4 small">


            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <h5>About Deesha Computer</h5>
                        <p>

                            At Deesha Computer, we understand the evolving landscape of the Information Technology industry and the crucial need for professionals who are not just academically equipped but job-ready with industry-specific skills. Our institution stands at the forefront of providing comprehensive courses designed to meet the demands of the IT sector.                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/courses">Courses</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/blog">Blog</a></li>

                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>Email: info@deeshacomputer.com</li>
                            <li>Phone: +1 (123) 456-7890</li>
                            <li>Address: 123 Computer Street, City, Country</li>
                        </ul>
                    </div>
                </div>
                <hr className="mt-2 mb-3" />
                <div className="text-center">
                    <p>&copy; {new Date().getFullYear()} Deesha Computer. All Rights Reserved.</p>
                </div>
            </div>


        </footer>
    )
}

export default Footer

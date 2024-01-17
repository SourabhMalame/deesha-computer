import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark pl-4">
                <div className="container d-flex justify-content-around">
                    <a className="navbar-brand fw-bold" href="/">
                        Deesha Computers
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav small">
                            <li className="nav-item">
                                <a className="nav-link active"  href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/courses">
                                    Courses
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/blog">
                                    Blog
                                </a>
                            </li>
                        </ul>


                    </div>
                    <div className="d-flex col-3 align-items-center  ">
                        <a className='border rounded-pill p-2 small col-6 text-center mx-2 bg-info text-white' href="/login">Login</a>
                        <a className='border rounded-pill p-2 small col-6 text-center bg-info text-white' href="/register">SignUp</a>


                    </div>



                </div>

            </nav>
        </header>
    )
}

export default Header

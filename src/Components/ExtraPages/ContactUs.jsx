import React from 'react'

const ContactUs = () => {
    return (
        <div className="bg-light col-12 row border">
            <div className=" border col-9 mx-auto bg-white p-5 m-4 rounded">
                <h1>Contact Us</h1>
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            Feel free to get in touch with us for any inquiries, questions about our courses, or other information.
                            Our team is ready to assist you.
                        </p>
                        <p>
                            <strong>Contact Information:</strong><br />
                            Address: 123 Example Street, City, Country<br />
                            Phone: +1234567890<br />
                            Email: info@deeshacomputer.com
                        </p>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label for="fullName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="fullName" placeholder="Enter Your Name" />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter Your Email" />
                            </div>
                            <div className="mb-3">
                                <label for="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs

import React, { Component, useState } from 'react'

const EmailContactForm = () => {    
    const [ values, setValues ] = useState({
        email: "", 
        subject: "", 
        message: "",
        errorEmail: "",
        errorSubkect: "",
        errorMessage: ""
    });

    return (
        <div className="my-form-container">
            <form>
                {/* {Single Item} */}
                    <div className="singleItem">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text"
                        id="email"
                        name="email" 
                        className="email" 
                        placeholder="Email (required)"
                    />
                </div> 
                {/* End Single Item */}

                {/* {Single Item} */}
                <div className="singleItem">
                    <label htmlFor="subject">Subject</label>
                    <input 
                        type="text"
                        id="subject"
                        name="subject" 
                        className="subject" 
                        placeholder="Subject (required)"
                    />
                </div>
                {/* End Single Item */}

                {/* {Single Item} */}
                <div className="textArea singleItem">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        name="message" 
                        id="message" col="30"
                        row="15" 
                        placeholder="Message"
                    >
                    </textarea>
                </div>
                {/* End Single Item */}
                <div className="btn">
                    <button type="submit">Submit</button>
                </div>
            </form>
            <h6>Email: admin@rpgstock.com</h6>
        </div>
    );
};

export default EmailContactForm;

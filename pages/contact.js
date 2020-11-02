import React, { Component, useState }  from 'react'
import Head from 'next/head';
import { Container,Row, Col } from 'react-bootstrap';
import validator from 'validator'

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [nameError, setNameError ] = useState({});
    const [emailError, setEmailError ] = useState({});
    const [subjectError, setSubjectError ] = useState({});
    const [messageError, setMessageError ] = useState({});

    const [success, setSuccess ] = useState("");

    const formValues = {name, email, subject, message};
 
    const formValidation = () => {
        const nameError = {};
        const emailError = {};
        const subjectError = {};
        const messageError = {};
        let isValid = true;

        if(name.trim().length <= 0){
            nameError.nameShort = "*Required*"
            isValid = false;
        }

        if(email.trim().length <= 0 || !validator.isEmail(email)){
            emailError.emailShort = "*Please input a valid email*"
            isValid = false;
        }

        if(subject.trim().length <= 0){
            subjectError.subjectShort = "*Required*"
            isValid = false;
        }

        if(message.trim().length <= 0){
            messageError.messageShort = "*Required*"
            isValid = false;
        }


        setNameError(nameError)
        setEmailError(emailError)
        setSubjectError(subjectError)
        setMessageError(messageError)
        return isValid;
    }

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        if(isValid){
        console.log("formvalues", formValues)
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            fetch("/contact", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", formValues })
            })
                .then(() => setSuccess("Submission was a success"))
                .catch(error => alert(error));
        }


    }

    return (
        <div>
        <Head>
            <title>RPGStock | Contact Form </title>
            <meta name="description" content="Contact RPGStock Adminsitrators with Email" />
        </Head>
        <center><h1> Contact Form </h1></center>
        < hr />
        <Container>
        {!success &&
            <form onSubmit={handleSubmit}>
                <Row className="justify-content-center" style={{paddingBottom: '30px'}}>
                    <Col md={6}>
                        <div className="singleItem">
                            <input 
                                type="text"
                                id="name"
                                name="name" 
                                className="name" 
                                placeholder="Name (required)"
                                value={name}
                                onChange={(e) => {setName(e.target.value)}}
                                style={{width: '100%', display: 'block', padding: '10px', borderRadius: '.25rem', border: '1px solid gray'}}
                            />
                            {Object.keys(nameError).map((key) => {
                                return <div key={key} style={{color: 'red'}}>{nameError[key]}</div>
                            })}
                        </div> 
                        {/* End Single Item */}                    
                    </Col>
                    <Col md={6}>
                        {/* {Single Item} */}
                        <div className="singleItem">
                            <input 
                                type="text"
                                id="email"
                                name="email" 
                                className="email" 
                                placeholder="Email (required)"
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}}
                                style={{width: '100%', display: 'block', padding: '10px', borderRadius: '.25rem', border: '1px solid gray'}}
                            />
                            {Object.keys(emailError).map((key) => {
                                return <div key={key} style={{color: 'red'}}>{emailError[key]}</div>
                            })}
                        </div> 
                        {/* End Single Item */}
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '30px'}}>
                    <Col md={6}>
                        {/* {Single Item} */}
                        <div className="singleItem">
                            <input 
                                type="text"
                                id="subject"
                                name="subject" 
                                className="subject" 
                                placeholder="Subject (required)"
                                value={subject}
                                onChange={(e) => {setSubject(e.target.value)}}
                                style={{width: '100%', display: 'block', padding: '10px', borderRadius: '.25rem', border: '1px solid gray'}}
                            />
                            {Object.keys(subjectError).map((key) => {
                                return <div  key={key} style={{color: 'red'}}>{subjectError[key]}</div>
                            })}
                        </div>
                        {/* End Single Item */}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={6}>
                        {/* {Single Item} */}
                        <div className="textArea singleItem">
                            <textarea 
                                name="message" 
                                id="message" col="40"
                                row="15" 
                                placeholder="Message (required)"
                                value={message}
                                onChange={(e) => {setMessage(e.target.value)}}
                                style={{width: '100%', display: 'block', padding: '10px', borderRadius: '.25rem', border: '1px solid gray'}}
                            >
                            </textarea>
                        </div>
                        {Object.keys(messageError).map((key) => {
                            return <div key={key} style={{color: 'red'}}>{messageError[key]}</div>
                        })}
                        {/* End Single Item */}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <div data-netlify-recaptcha="true"></div>
                </Row>
                <Row className="justify-content-center">
                    <div className="btn">
                        <button type="submit" 
                            style={{fontSize: '20px',
                                fontWeight: 'bold',
                                padding: '7px 20px', 
                                backgroundColor: 'orange', 
                                borderColor: 'orange', 
                                position: 'relative',
                                borderRadius: '10px',
                                margin: '0 0 10px'}}>
                        SUBMIT</button>
                    </div>
                </Row>
            </form>
        }
        {success &&
            <div>
                <center><h1>Thank you for your submission!</h1>
                <p><br /><br />We will get back to you as soon as possible.
                    Feel free to come back to the <br/><a href="/">Homepage</a>.
                </p></center>
            </div>
        }
        </Container>

        </div>
    )
}

export default Contact;

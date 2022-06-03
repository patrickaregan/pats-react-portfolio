import React, { useState } from 'react';
import { emailIsValid } from '../../utils/formValidation';

function Contact() {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [ errorMsg, setErrorMsg] = useState('');
    const { name, email, message } = formData;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errorMsg) {
            console.log(formData);
        }
    }

    const handleChange = (event) => {

        // validate name field
        if (event.target.name === 'name') {
            const targetValue = event.target.value.trim();
            if (targetValue.length < 1) {
                setErrorMsg("Name cannot be empty!");
            } else {
                setErrorMsg("");
            }
        }

        // validate email field
        if (event.target.name === 'email') {
            if (!emailIsValid(event.target.value)) {
                setErrorMsg("Email is not valid!");
            } else {
                setErrorMsg("");
            }
        }

        // validate message field
        if (event.target.name === 'message') {
            const targetValue = event.target.value.trim();
            if (targetValue.length < 1) {
                setErrorMsg("Message is required!");
            } else {
                setErrorMsg("");
            }
        }

        // set form data
        if (!errorMsg) {
            setFormData({...FormData, [event.target.name]: event.target.value });
        }
    }

    return (
        <section className='my-3' id="contact">
            <h2 id="contact-header" className='text-dark bg-primary p-2 display-inline-block'>Contact</h2>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Email:</td>
                            <td>patrickaregan@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>512-914-2010</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Contact;
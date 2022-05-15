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
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="name">Name:</label></td>
                                <td><input type="text" name="name" defaultValue={name} onBlur={handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email">Email:</label></td>
                                <td><input type="email" name="email" defaultValue={email} onBlur={handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="message">Message:</label></td>
                                <td><textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}></textarea></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                {errorMsg && (
                                    <p className="error-message">{errorMsg}</p>
                                )}
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button type="submit">Submit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </section>
    )
}

export default Contact;
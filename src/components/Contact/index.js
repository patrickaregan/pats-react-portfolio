import React from 'react';

function Contact() {   

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
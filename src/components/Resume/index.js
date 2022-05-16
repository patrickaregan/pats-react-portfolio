import React from 'react';
import resume from './patrick_regan_resume.docx';

function Resume() {
    return (
        <section className='my-3' id="resume">
            <h2 id="resume-header" className='text-dark bg-primary p-2 display-inline-block'>Resume</h2>
            <div className='resume-container'>
                <p><a href={resume} download>Download my resume</a></p>
                <p>Front-end proficiencies:</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>Responsive design</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                </ul>
                <p>Back-end proficiencies:</p>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </section>
    )
}

export default Resume;
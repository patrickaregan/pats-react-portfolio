import React from 'react';
import Project from '../Project';

function Portfolio(props) {

    const { currentPage, setCurrentPage } = props;

    return (
        <section className='my-3' id="resume">
            <h2 id="portfolio-header" className='text-dark bg-primary p-2 display-inline-block'>Portfolio</h2>
            <div className="portfolio-container">
                <div className='featured-project-container'>
                    <Project
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        projectTitle="Tech Blog"
                        technologiesUsed = "HTML, CSS, JavaScript, Node, Express, Sequelize, MySQL, Bcrypt, Sessions, Insomnia"
                        applicationUrl = "https://pats-tech-blog.herokuapp.com/"
                        repositoryUrl = "https://github.com/patrickaregan/pats-tech-blog"
                        imageUrl="tech-blog.png"
                    ></Project>
                </div>
                <div className='project-container'>
                    <Project
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        projectTitle="Note Taker"
                        technologiesUsed = "Express, Heroku"
                        applicationUrl = "https://pats-note-taker.herokuapp.com/"
                        repositoryUrl = "https://github.com/patrickaregan/pats-note-taker"
                        imageUrl="note-taker.png"
                    ></Project>
                </div>
                <div className='project-container'>
                    <Project
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        projectTitle="Coding Quiz"
                        technologiesUsed = "HTML, CSS, JavaScript"
                        applicationUrl = "https://patrickaregan.github.io/pats-code-quiz/"
                        repositoryUrl = "https://github.com/patrickaregan/pats-code-quiz"
                        imageUrl="code-quiz.png"
                    ></Project>
                </div>
                <div className='project-container'>
                    <Project
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        projectTitle="Workday Scheduler"
                        technologiesUsed = "HTML, CSS, JavaScript"
                        applicationUrl = "https://patrickaregan.github.io/pats-work-schedule/"
                        repositoryUrl = "https://github.com/patrickaregan/pats-work-schedule"
                        imageUrl="workday-scheduler.png"
                    ></Project>
                </div>
                <div className='project-container'>
                    <Project
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        projectTitle="Password Generator"
                        technologiesUsed = "HTML, CSS, JavaScript"
                        applicationUrl = "https://patrickaregan.github.io/challenge-03/"
                        repositoryUrl = "https://github.com/patrickaregan/challenge-03"
                        imageUrl="password-generator.png"
                    ></Project>
                </div>
                <div className='featured-project-container'>
                    <Project
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        projectTitle="Run Buddy"
                        technologiesUsed = "HTML, CSS"
                        applicationUrl = "https://patrickaregan.github.io/run-buddy/"
                        repositoryUrl = "https://github.com/patrickaregan/run-buddy"
                        imageUrl="run-buddy.png"
                    ></Project>
                </div>
            </div>
            
        </section>
    )
}

export default Portfolio;
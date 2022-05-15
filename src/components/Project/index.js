import React from 'react';

function Project(props) {

    const { 
        projectTitle,
        technologiesUsed,
        applicationUrl,
        repositoryUrl,
        imageUrl
    } = props;

    let style = "";

    switch (imageUrl) {
        case "tech-blog.png":
            style = "tech-blog";
            break;
        case "note-taker.png":
            style = "note-taker";
            break;
        case "code-quiz.png":
            style = "code-quiz";
            break;
        case "workday-scheduler.png":
            style = "workday-scheduler";
            break;
        case "password-generator.png":
            style = "password-generator";
            break;
        case "run-buddy.png":
            style = "run-buddy";
            break;
        default:
            style = "";
            break;
    }

    return (
        <div>
            <div>
                <div className='project-info'>
                    <a href={applicationUrl}>{projectTitle}</a><br />
                    {technologiesUsed}<br />
                    <a href={repositoryUrl}>View repository</a>
                </div>
                <div className={style}>&nbsp;</div>
            </div>
            
        </div>
    )
}

export default Project;
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
        case "story-team.png":
            style = "story-team";
            break;
        default:
            style = "";
            break;
    }

    return (
        <div>
            <div>
                <div className='project-info'>
                    <a href={applicationUrl} target="_blank" rel="noreferrer">{projectTitle}</a><br />
                    {technologiesUsed}<br />
                    <a href={repositoryUrl} target="_blank" rel="noreferrer">View repository</a>
                </div>
                <a href={applicationUrl} target="_blank" rel="noreferrer">
                    <div className={style}>&nbsp;</div>
                </a>
            </div>
            
        </div>
    )
}

export default Project;
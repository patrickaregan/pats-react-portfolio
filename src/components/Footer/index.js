import React from 'react';

function Footer() {

    // get the current year
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    // my profile URLs
    let gitHubUrl = "https://github.com/patrickaregan";
    let linkedInUrl = "https://www.linkedin.com/in/patrick-regan-090566ab";
    let stackOverflowUrl = "https://stackoverflow.com/users/17599718/patrickaregan";

    return (
        <footer className='container text-center py-3'>
            <h3 className='text-dark'>

                <a target="_blank" rel="noopener noreferrer" href={gitHubUrl}>
                    <img id="gitHub-profile-image" src={require(`../../assets/images/GitHub_Logo.png`)} alt="Patrick Regan GitHub profile" /><img id="gitHub-octocat-image" src={require(`../../assets/images/Octocat.png`)} alt="Patrick Regan GitHub profile" />
                </a>

                <span className="gitHub-spacer"></span>

                <a target="_blank" rel="noopener noreferrer" href={linkedInUrl}>
                    <img id="linkedIn-profile-image" src={require(`../../assets/images/LI-Logo.png`)} alt="Patrick Regan LinkedIn profile" />
                </a>
                
                <span className="linkedIn-spacer"></span>

                <a target="_blank" rel="noopener noreferrer" href={stackOverflowUrl}>
                    <img id="stackOverflow-profile-image" src={require(`../../assets/images/stackoverflow-icon-14.jpg`)} alt="Patrick Regan StackOverflow profile" />
                </a>


            </h3>
        </footer>
    )
}

export default Footer;
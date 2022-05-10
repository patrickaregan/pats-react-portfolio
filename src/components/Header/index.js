import React from 'react';

function Header() {
    return (
        <header>
            <div className="container flex-row justify-space-between align-center py-3">
                <h1 id="name-header" className="page-title text-secondary bg-dark py-2 px-3">Patrick Regan</h1>
                <nav className="flex-row">
                    <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark nav-option" href="#about">About Me</a>
                    <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark nav-option" href="#portfolio">Portfolio</a>
                    <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark nav-option" href="#contact">Contact</a>
                    <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark nav-option" href="#resume">Resume</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;
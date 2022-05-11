import React from 'react';
import Project from '../Project';

function Portfolio(props) {

    const { currentPage, setCurrentPage } = props;

    return (
        <section className='my-3' id="resume">
            <h2 id="portfolio-header" className='text-dark bg-primary p-2 display-inline-block'>Portfolio</h2>
            <div>
                <Project
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                ></Project>
            </div>
        </section>
    )
}

export default Portfolio;
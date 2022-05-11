import React from 'react';

function Project(props) {

    const { currentPage, setCurrentPage } = props;

    console.log("Current Page: " + currentPage);

    return (
        <p>{currentPage}</p>
    )
}

export default Project;
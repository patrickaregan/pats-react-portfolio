import React from 'react';

function Footer() {

    // get the current year
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    return (
        <footer className='container text-center py-3'>
            <h3 className='text-dark'>&copy; {currentYear} by Patrick Regan</h3>
        </footer>
    )
}

export default Footer;
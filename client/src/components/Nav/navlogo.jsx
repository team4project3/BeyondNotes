import React from 'react';

function NavLogo(props) {

    return (
        <a className="navbar-brand" href="/">
            <img
                className="img-fluid navlogo"
                src={props.image}
                alt="navbarImage"
            />
             BeyondNotes
        </a>
    )
};

export default NavLogo;
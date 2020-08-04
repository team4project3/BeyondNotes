import React from 'react';

function NavLogo(props) {

    return (
        <>
            <a href="#">            
            <img
                className="brand-logo navlogo"
                src={props.image}
                alt="navbarImage"
            /></a>

            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>

             BeyondNotes
        </>
    )
};

export default NavLogo;
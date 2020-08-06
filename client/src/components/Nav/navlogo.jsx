import React from 'react';

function NavLogo(props) {

    return (
        <>
            <a href="home"> BeyondNotes           
            <img
                // className="brand-logo navlogo"
                // src={props.image}
                // alt="navbarImage"
            /></a>

            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>


        </>
    )
};

export default NavLogo;
import React from 'react';
import { withRouter } from "react-router-dom";

// basic header nav just goes between login pages
function Header() {
    return(
        <nav className="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex">
                <span className="h1">Beyond Notes!</span>
            </div>
        </nav>
    )
}
export default withRouter(Header);
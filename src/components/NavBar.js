import React, { Fragment } from 'react';

const NavBar = () => (
    <Fragment>
        <nav>
            <div className="nav-wrapper">
                {/* TODO: add custom font */}
                <a href="#" className="brand-logo">Memory Game</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>Score: | High Score: </li>
                </ul>
            </div>
        </nav>
    </Fragment>
)

export default NavBar;
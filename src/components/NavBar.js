import React, { Fragment } from 'react';

const styles = {
    a: {
        marginLeft: 20,
        fontFamily: 'Fredericka the Great',
    },

    li: {
        marginRight: 20,
        fontFamily: 'Karla',
    }
}

const NavBar = () => (
    <Fragment>
        <nav>
            <div className="nav-wrapper">
                {/* TODO: add custom font */}
                <a href="#" className="brand-logo" style={styles.a}>Memory Game</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li style={styles.li}>Current Score:  |  High Score:  </li>
                </ul>
            </div>
        </nav>
    </Fragment>
)

export default NavBar;
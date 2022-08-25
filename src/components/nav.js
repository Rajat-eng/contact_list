import React from "react";
import styles from '../styles/navbar.module.css';

import {Link} from 'react-router-dom';


const Navbar=()=>{
    return(
        <div className={styles.nav}>
            <Link to="/" className={styles.navlink}> Contact List App</Link>
           
        </div>
    )
}

export default Navbar;
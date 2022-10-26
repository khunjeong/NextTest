import React from 'react';
import Image from 'next/image';
import styles from './navbar.module.css';

import Logo from '../../assets/image/logo.png';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image className={styles.img} src={Logo} alt="logo" />
                <h1 className={styles.title}>너튜브</h1>
            </div>
        </header>
    );
};

export default Navbar;

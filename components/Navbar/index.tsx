import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';

import Logo from '../../assets/image/logo.png';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image className={styles.img} src={Logo} alt="logo" />
                <h1 className={styles.title}>너튜브</h1>
            </div>
            <ul className={styles.link_list}>
                <li>
                    <Link href={'/SSG'}>SSG</Link>
                </li>
                <li>
                    <Link href={'/ServerSide'}>SSR</Link>
                </li>
                <li>
                    <Link href={'/UseQueryVersion'}>useQuery</Link>
                </li>
            </ul>
        </header>
    );
};

export default Navbar;

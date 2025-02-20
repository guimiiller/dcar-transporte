'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from '../styles/Header.module.css';

export function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setMenuOpen(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.logo}>
                    <Image src={'/logodcar.png'} alt="Logo DCAR Transporte" width={160} height={160}/>
                </Link>

                <ul className={styles.navList}>
                    <li><Link href="/" className={styles.navItem}>Home</Link></li>
                    <li><Link href="#services" className={styles.navItem}>Serviços</Link></li>
                    <li><Link href="#about" className={styles.navItem}>Sobre</Link></li>
                    <li><Link href="#testimonials" className={styles.navItem}>Depoimentos</Link></li>
                    <li><Link href="#fleets" className={styles.navItem}>Frotas</Link></li>
                    <li><Link href="#contact" className={styles.navItem}>Contato</Link></li>
                </ul>


                 <div className={styles.iconsContainer}>
                    <Link href={'https://www.instagram.com/dcar_transporte/'} target="blank"><Image src={'/instagramblue.svg'} alt="Instagram Icon" width={30} height={30} className={styles.icon}/></Link>
                    <Link href={''}><Image src={'/facebookblue.svg'} alt="Facebook Icon" width={30} height={30} className={styles.icon}/></Link>
                </div>


                <div className={styles.menuButton} onClick={() => setMenuOpen(!isMenuOpen)}>
                    <div className={`${styles.bar} ${isMenuOpen ? styles.openBar1 : ''}`}></div>
                    <div className={`${styles.bar} ${isMenuOpen ? styles.openBar2 : ''}`}></div>
                    <div className={`${styles.bar} ${isMenuOpen ? styles.openBar3 : ''}`}></div>
                </div>
            </nav>

            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.showMenu : ''}`}>
                <ul className={styles.mobileNavList}>
                    <li><Link href="/" className={styles.mobileNavItem} onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link href="#services" className={styles.mobileNavItem} onClick={() => setMenuOpen(false)}>Serviços</Link></li>
                    <li><Link href="#about" className={styles.mobileNavItem} onClick={() => setMenuOpen(false)}>Sobre</Link></li>
                    <li><Link href="#testimonials" className={styles.mobileNavItem} onClick={() => setMenuOpen(false)}>Depoimentos</Link></li>
                    <li><Link href="#fleets" className={styles.mobileNavItem} onClick={() => setMenuOpen(false)}>Frotas</Link></li>
                    <li><Link href="#contact" className={styles.mobileNavItem} onClick={() => setMenuOpen(false)}>Contato</Link></li>
                    <div className={styles.mobileIconsContainer}>
                        <Link href={'https://www.instagram.com/dcar_transporte/'} target="blank"><Image src={'/instagramblue.svg'} alt="Instagram Icon" width={30} height={30} className={styles.icon}/></Link>
                        <Image src={'/facebookblue.svg'} alt="Facebook Icon" width={30} height={30} className={styles.icon}/>
                    </div>
                </ul>
            </div>
        </header>
    );
}

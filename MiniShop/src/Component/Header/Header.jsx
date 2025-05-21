import { useState } from "react";
import { NavLink } from "react-router-dom";
import {RxHamburgerMenu} from "react-icons/rx";
import {IoClose} from "react-icons/io5";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleLinkClick = () => setMenuOpen(false)

    return (
        <header className={styles.header}>
            <div className={styles.logo}>MySite</div>

            <nav className={styles.desktopNav}>
                <NavLink to="/" className={styles.link}>Home</NavLink>
                <NavLink to="/about" className={styles.link}>About</NavLink>
                <NavLink to="/contact" className={styles.link}>Contact</NavLink>
            </nav>

            <div className={styles.burgerIcon} onClick={() => setMenuOpen(true)}>
                <RxHamburgerMenu size={28} />
            </div>

            <div className={`${styles.overlay} ${menuOpen ? styles.show : ''}`}>
                <div className={styles.closeIcon} onClick={() => setMenuOpen(false)}>
                    <IoClose size={28} />
                </div>
                <nav className={styles.mobileNav}>
                    <NavLink to="/" className={styles.mobileLink} onClick={handleLinkClick}>Home</NavLink>
                    <NavLink to="/about" className={styles.mobileLink} onClick={handleLinkClick}>About</NavLink>
                    <NavLink to="/contact" className={styles.mobileLink} onClick={handleLinkClick}>Contact</NavLink>
                </nav>
            </div>
        </header>
    )
}
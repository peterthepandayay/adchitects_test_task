import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPages } from '../services/api';
import logo from "../img/logo.svg"

function Header() {
    const [pages, setPages] = useState([]);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        async function fetchPageData() {
            try {
                const data = await fetchPages();
                setPages(data);
            } catch (error) {
                console.error('Error fetching pages:', error);
            }
        }

        fetchPageData();
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className={isMenuOpen ? 'open' : ''}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <div className="logo"><object data={logo} type="image/svg+xml"></object></div>
                <button className="menu-button" onClick={toggleMenu}>
                    {isMenuOpen ? 'Close' : 'Menu'}
                </button>
                <ul className={isMenuOpen ? 'show-menu' : ''}>
                    {pages.map((page) => {
                        let linkText;

                        if (page.url === '/') {
                            linkText = 'Home';
                        } else {
                            const pageName = page.url.substring(1);
                            linkText = pageName.charAt(0).toUpperCase() + pageName.slice(1);
                        }

                        return (
                            <li key={page.id}>
                                <Link to={page.url}>{linkText}</Link>
                            </li>
                        );
                    })}
                    {!isMenuOpen && (
                        <li>
                            <button className="contact-button">Contact Us</button>
                        </li>
                    )}
                </ul>
            </nav>
            {isMenuOpen && (
                <div className="overlay" onClick={toggleMenu}>
                    <ul className="overlay-menu">
                        {pages.map((page) => {
                            let linkText;

                            if (page.url === '/') {
                                linkText = 'Home';
                            } else {
                                const pageName = page.url.substring(1);
                                linkText = pageName.charAt(0).toUpperCase() + pageName.slice(1);
                            }

                            return (
                                <li key={page.id}>
                                    <Link to={page.url}>{linkText}</Link>
                                </li>
                            );
                        })}
                        <li>
                            <button className="overlay-contact-button">Contact Us</button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;

import React from 'react';
import Menu from './submenu/menu';
import { useState, useEffect } from 'react';
import Link from 'next/Link'
export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const chnageBackgroundNav = () => {
        if (window.scrollY >= 5) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", chnageBackgroundNav);
    });
    return (
        <>
            <nav className={
                navbar
                    ? "navbar navbar-expand-lg navbar-light bg-light  fixed-top shadow animate__animated animate__fadeInDown animate__faster "
                    : "navbar navbar-expand-lg navbar-light  "
            }>
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="/gambar/logo.svg" width="35" alt="Logo" className="me-2" />
                        <span className="fw-bold fst-italic text-dark dolan">DOLAN</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Menu menu="Home" className="nav-link " link="/" />
                            <Menu menu="Destination" className="nav-link " link="/destination" />
                            <Menu menu="Blog" className="nav-link " link="/blog" />
                            <Link href="/Admin">
                                <li className="nav-item">
                                    <a name="" id="" className="btn btn-primary  rounded-pill" role="button">Login</a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

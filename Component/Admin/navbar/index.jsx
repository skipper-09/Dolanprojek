import React from 'react'

export default function Navbaradmin() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className='container'>
                    <a className="navbar-brand" href="#">Admin Dolan</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" >Beranda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Data Produk</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Data user</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}

import Link from "next/link";
export default function Navbaradmin() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className='container'>
                    <Link href="/Admin">
                        <a className="navbar-brand fw-bold" >Admin Dolan</a>
                    </Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <Link href="/Admin">
                                <li className="nav-item active">
                                    <a className="nav-link" >Beranda</a>
                                </li>
                            </Link>
                            <Link href="/Admin/dataproduk">
                                <li className="nav-item">
                                    <a className="nav-link" >Data Produk</a>
                                </li>
                            </Link>
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

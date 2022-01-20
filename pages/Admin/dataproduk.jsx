import Layoutadmin from "../../Component/Admin/layoutadmin";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function dataproduk() {
    const { data, error } = useSWR('http://localhost:3000/api/dataproduk', fetcher)
    console.log(data);
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
        <div>
            <Layoutadmin title="Data Product" />

            <div className="container">
                <div className="mt-3">
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        Tambah Produk
                    </button>
                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        Tambah Produk
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body">
                                    <div className="form-group mb-2">
                                        <label htmlFor>Judul Produk</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor>Harga</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor>Deskripsi Produk</label>
                                        <textarea name="" id="" className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button type="button" className="btn btn-primary">
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section>
                    <h5 className="mt-4">Data Produk</h5>
                    <table class="table text-center">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Judul</th>
                                <th>Harga</th>
                                <th>Photo</th>
                                <th>Deskripsi</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((produk, i) => (
                                <tr key={i} >
                                    <td>{produk.id}</td>
                                    <td>{produk.judul}</td>
                                    <td>{produk.harga}</td>
                                    <td>{produk.photos}</td>
                                    <td>{produk.description}</td>
                                    <td>
                                        <a
                                            name=""
                                            id=""
                                            className="btn btn-danger ms-2"
                                            href="#"
                                            role="button"

                                        >
                                            Hapus
                                        </a>
                                        <a
                                            name=""
                                            id=""
                                            className="btn btn-primary ms-2"
                                            href="#"
                                            role="button"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
}

import Layoutadmin from "../../Component/Admin/layoutadmin";

export default function dataproduk() {
    return (
        <div>
            <Layoutadmin title="Data Product" />

            <div className="container">

                <h5 className="mt-4">Data Produk</h5>
                <div>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Tambah Produk
                    </button>
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Tambah Produk</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
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
                                        <textarea name="" id="" className="form-control" ></textarea>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>

    )
}

import Link from 'next/link';
export const Result = ({ gambar, judul, deskripsi, harga, tujuan, as }) => {
    return (
        <>
            <div className="content d-flex -justify-content-center mt-2 border">
                <div className="col-4">
                    <Link href={tujuan} as={as}>
                        <img src={gambar} className="card-img" alt="" />
                    </Link>
                </div>
                <div className="col-8 px-4 py-4">
                    <h5 className=" fw-bold">{judul}</h5>
                    <p>{deskripsi}</p>
                    <h6 className=" fw-bold">Rp {harga} / Person</h6>
                </div>
            </div>
        </>
    )
}
export default Result;

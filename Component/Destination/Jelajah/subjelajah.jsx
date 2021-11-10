
export const Subjelajah = ({ img, nama, jumlah }) => {
    const baseurl = "/gambar"
    return (
        <>
            <div className="card border-0 ">
                <img src={baseurl + img} className=" card-img" alt="..." />
                <div className="mt-2">
                    <span className="card-title fw-bold">{nama}</span>
                    <p className="card-text">{jumlah} Lokasi</p>
                </div>
            </div>
        </>
    )
}
export default Subjelajah;

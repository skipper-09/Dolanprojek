import Subrekomdasi from "./subrekomdasi";

export default function Rekomendasi() {
    return (
        <div className="rekomendasi">
            <div className="mt-5">
                <h5 className="fw-bold">Rekomendasi Destinasi</h5>
                <div className="row mt-4">
                    <Subrekomdasi coloum="6" className="col-6" gambar="/gambar/pantai-boom.jpg" lokasi="Banyuwangi" jumlah="345" />
                    <Subrekomdasi coloum="6" className="col-6" gambar="/gambar/pandawa.jpg" lokasi="Bali" jumlah="345" />
                    <Subrekomdasi coloum="4" className="col-4" gambar="/gambar/lombok.jpg" lokasi="Lombok" jumlah="345" />
                    <Subrekomdasi coloum="4" className="col-4" gambar="/gambar/bromo.jpg" lokasi="Malang" jumlah="345" />
                    <Subrekomdasi coloum="4" className="col-4" gambar="/gambar/jakarta.jpg" lokasi="Jakarta" jumlah="345" />

                </div>
            </div>
        </div>
    )
}

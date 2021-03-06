import React, { useState } from "react";
import Rincianpesan from "./rincianpesan";
export default function Payment({ gambar, judul, deskripsi }) {
  const [tambah, setTambah] = useState(1);

  const Handler = () => {
    setTambah(tambah + 1);
  };
  const Kurang = () => {
    if (tambah >= 2) {
      setTambah(tambah - 1);
    }
  };
  return (
    <div>
      <div className="payment mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={gambar}
                className="card-img"
                height="400"
                width="200"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <div className="py-4">
                <h4>{judul}</h4>
                <p>{deskripsi}</p>
                <div className=" row ">
                  <div class="col-auto">
                    <label class="col-form-label">Jumlah</label>
                  </div>
                  <div className="col-auto">
                    <span className="">
                      <button
                        className=" btn border border-1"
                        onClick={Handler}
                      >
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-plus-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                      </button>
                      <span className="ms-3 me-3">{tambah}</span>
                      <button className="btn border border-1" onClick={Kurang}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-dash-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                      </button>
                      <span className="ms-2">/Orang</span>
                    </span>
                  </div>
                </div>
                <div class="row g-3 align-items-center mt-1">
                  <div class="col-auto">
                    <label class="col-form-label">Tanggal</label>
                  </div>
                  <div class="col-auto">
                    <input type="date" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="form-pemesanan mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-center">Rincian Pesanan Anda</h5>
              <h6>Tanggal</h6>
              <label>19 maret 2022</label>
              <h6>Jumlah Orang</h6>
              <label>19 maret 2022</label>
            </div>
            <div className="col-md-8">
              <h5 className="text-center">Masukkan Data Anda</h5>
              <Rincianpesan />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

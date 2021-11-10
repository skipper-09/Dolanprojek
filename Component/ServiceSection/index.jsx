import React from 'react'
import Servis from './childservice/servis'
export default function Service() {
    return (
        <>
            <div className="service">
                <div className="container">
                    <h3 className=" fw-bold">Service</h3>
                    <div className="row">
                        <Servis gambar="/gambar/fast-food.svg" className="content-service" content="Free Makanan" description="service 1" />
                        <Servis gambar="/gambar/guide.svg" className="content-service1" content="Propfesional Guide" description="service 2" />
                        <Servis gambar="/gambar/flight.svg" className="content-service2" content="A Lot Destination" description="service 3" />
                        <Servis gambar="/gambar/bus.svg" className="content-service3" content="Free Vehicle" description="service 4" />
                    </div>
                </div>

            </div>
        </>
    )
}

import React from 'react'
import Populer from './childpopuler/populer';
export default function PopulerDestination() {
    return (
        <>
            <div className="populer-destination">
                <div className="container">
                    <h3 className=" fw-bold">Populer Destination</h3>
                    <div className="row mt-4">
                        <Populer img="/gambar/kawah-ijen.jpg" namedestination="Kawah Ijen" harga="150.000" />
                        <Populer img="/gambar/pantai-boom.jpg" namedestination="Pantai Boom" harga="150.000" />
                        <Populer img="/gambar/pulaumerah.jpg" namedestination="Pulau Merah" harga="150.000" />
                    </div>
                </div>
            </div>
        </>
    )
}

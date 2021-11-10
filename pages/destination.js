import React from 'react'
import Layout from '../Component/Layout';
import Destinasi from '../Component/Destination'
import Jelajah from '../Component/Destination/Jelajah'
import Rekomendasi from '../Component/Destination/rekomendasi';
export default function destination() {
    return (
        <>
            <Layout title="Destination">
                <div className="container">
                    <Destinasi />
                    <section className="destinasi">
                        <Jelajah />
                        <Rekomendasi />
                    </section>
                </div>
            </Layout>
        </>
    )
}

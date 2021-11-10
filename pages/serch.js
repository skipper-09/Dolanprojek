import React from 'react'
import Layout from '../Component/Layout'
import Cari from '../Component/result';
import Section from '../Component/result/sub/section';
export default function Serch() {
    return (
        <Layout>
            <div className="container">
                <Cari />
                <Section />
            </div>
        </Layout>
    )
}

import React from 'react'
import HeroBlog from '../../Component/Blog/heroblog'
import SectionBlog from '../../Component/Blog/SectionBlog'
import Layout from '../../Component/Layout'
export default function Blog() {
    return (
        <>
            <Layout title="Dolan | Blog">
                <div className="container">
                    <HeroBlog />
                    <SectionBlog />

                </div>
            </Layout>
        </>
    )
}

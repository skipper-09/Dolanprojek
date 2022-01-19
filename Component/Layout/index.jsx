import Navbar from "../Navbar"
// import Footer from "../footer"
import Head from 'next/head';
export default function Layout(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <link rel="shortcut icon" href="/gambar/logo.svg" type="image/svg+xml-icon" />
            </Head>
            <Navbar />
            {props.children}
            {/* <Footer /> */}
        </>
    )
}

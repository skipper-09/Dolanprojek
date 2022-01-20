import Navbaradmin from "../navbar";
import Head from "next/head";
export default function Layoutadmin(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Navbaradmin />
            <div className="container">

                {props.children}
            </div>
        </div>
    )
}

import Layout from '../../Component/Layout'
import Bayar from '../../Component/Payment'
export async function getServerSideProps(context) {
    // let id = context.params.id;
    let id = context.params.id;
    return { props: { id } };
}
export default function Payment(props) {

    return (
        <Layout title="Payment">
            {/* <Bayar gambar/> */}
            <div>
                <p>{props.id}</p>
                {/* <p>{props.id}</p> */}
            </div>
        </Layout >
    )
}

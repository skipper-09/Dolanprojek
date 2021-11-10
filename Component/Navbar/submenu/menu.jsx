import Link from 'next/link';
export const Menu = (props) => {
    return (
        <>
            <li className="nav-item">
                <Link href={props.link}>
                    <a className={props.className} aria-current="page" >{props.menu}</a>
                </Link>
            </li>
        </>
    )
}

export default Menu;

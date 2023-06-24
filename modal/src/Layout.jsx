import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link className="a boss" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="a" to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link className="a" to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className="a" to="/works">Works</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
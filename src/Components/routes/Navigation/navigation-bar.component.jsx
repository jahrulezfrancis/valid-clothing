import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation-bar.styles.scss"
import { ReactComponent as CrownLogo } from "../../../Assets/crown.svg"


const NavBar = () => {
    return (
        <Fragment>
            <div className="nav-bar-container">
                <Link className="nav-logo-container" to='/'>
                    <div>
                        <CrownLogo />
                    </div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="shop">Shop</Link>
                    <Link className="nav-link" to="shop">Contact</Link>
                    <Link className="nav-link" to="auth">Sign In</Link>
                    <Link className="nav-link" to="shop">Cart</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavBar;
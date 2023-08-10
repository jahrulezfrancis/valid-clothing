import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation-bar.styles.scss"
import { ReactComponent as CrownLogo } from "../../../Assets/crown.svg"
import { UserContext } from "../../Context/user-context";
import { signOutUser } from "../../Utils/Firebase/firebase-.utils";


const NavBar = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const handleLogout = async () => {
        await signOutUser()
        setCurrentUser(null)
    }

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
                    {currentUser ? (
                        <Link className="nav-link" onClick={handleLogout}>Sign out</Link>
                    ) : (
                        <Link className="nav-link" to="auth">Sign in</Link>
                    )}
                    <Link className="nav-link" to="shop">Cart</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavBar;
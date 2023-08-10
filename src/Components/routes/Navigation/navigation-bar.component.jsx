import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation-bar.styles.scss"
import { ReactComponent as CrownLogo } from "../../../Assets/crown.svg"
import { UserContext } from "../../Context/user-context";
import { signOutUser } from "../../Utils/Firebase/firebase-.utils";
import CartIcon from "../../Cart-Icon/cart-icon.component";
import CartDropDown from "../../Cart-dropDown/cart-drop-down.component";
import { CartContext } from "../../Context/cart-context";


const NavBar = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)
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
                    {currentUser ? (
                        <Link className="nav-link" onClick={handleLogout}>Sign out</Link>
                    ) : (
                        <Link className="nav-link" to="auth">Sign in</Link>
                    )}
                    <CartIcon />
                </div>
            </div>
            {isCartOpen && <CartDropDown />}
            <Outlet />
        </Fragment>
    )
}

export default NavBar;
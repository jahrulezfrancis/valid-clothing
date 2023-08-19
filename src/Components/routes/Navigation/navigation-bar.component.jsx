import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { NavContainer, LogoContainer, LinksContainer, Navlink } from "./navigation-bar.styles"
// import { ReactComponent as CrownLogo } from "../../../Assets/crown.svg"
import { ReactComponent as ValidLogo } from "../../../Assets/Shopping-u-draw.svg"
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
            <NavContainer>
                <LogoContainer to='/'>
                    {/* <CrownLogo /> */}
                    <ValidLogo width={"70px"} />
                    <h2>Valid Clothing</h2>
                </LogoContainer>
                <LinksContainer>
                    <Navlink to="shop">Shop</Navlink>
                    {currentUser ? (
                        <Navlink onClick={handleLogout}>Sign out</Navlink>
                    ) : (
                        <Navlink to="auth">Sign in</Navlink>
                    )}
                    <CartIcon />
                </LinksContainer>
            </NavContainer>
            {isCartOpen && <CartDropDown />}
            <Outlet />
        </Fragment>
    )
}

export default NavBar;
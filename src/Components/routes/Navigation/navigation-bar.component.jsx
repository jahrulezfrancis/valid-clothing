import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavContainer, LogoContainer, LinksContainer, Navlink, BigNavContainer } from "./navigation-bar.styles"
import { ReactComponent as ValidLogo } from "../../../Assets/Shopping-u-draw.svg"
import CartIcon from "../../Cart-Icon/cart-icon.component";
import { signOutUser } from "../../Utils/Firebase/firebase.utils";
import CartDropDown from "../../Cart-dropDown/cart-drop-down.component";
import { selectCurrentUser } from "../../Store/user/userSelector";
import { selectIsCartOpen } from "../../Store/Cart/cart.selector";


const NavBar = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen  = useSelector(selectIsCartOpen);

    return (
        <BigNavContainer>
            <NavContainer>
                <LogoContainer to='/'>
                    {/* <CrownLogo /> */}
                    <ValidLogo width={"70px"} />
                    <h2>Valid Clothing</h2>
                </LogoContainer>
                <LinksContainer>
                    <Navlink to="shop">Shop</Navlink>
                    {currentUser ? (
                        <Navlink onClick={signOutUser}>Sign out</Navlink>
                    ) : (
                        <Navlink to="auth">Sign in</Navlink>
                    )}
                    <CartIcon />
                </LinksContainer>
            </NavContainer>
            {isCartOpen && <CartDropDown />}
            <Outlet />
        </BigNavContainer>
    )
}

export default NavBar;
import React, { useState } from "react";
import { ReactComponent as ValidLogo } from "../../../Assets/Shopping-u-draw.svg"
import CartIcon from "../../Cart-Icon/cart-icon.component";
import { signOutUser } from "../../Utils/Firebase/firebase.utils";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Store/user/userSelector";
import { selectIsCartOpen } from "../../Store/Cart/cart.selector";
import CartDropDown from "../../Cart-dropDown/cart-drop-down.component";
import { NavContainer, LogoContainer, LinksContainer, Navlink, Container } from "./navigation-bar.styles";
import styled from "styled-components";

const MobileMenuContainer = styled.div`
  display: none; /* Initially hide the menu on larger screens */
  
  @media (max-width: 768px) {
    /* Display the menu on screens with a max-width of 768px (typical mobile devices) */
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff; /* Background color for the mobile menu */
    z-index: 1000; /* Adjust the z-index as needed to ensure it's above other content */
  }
`;

const MobileMenuItem = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 18px;
  border-bottom: 1px solid #ccc; /* Add a separator between menu items */
  color: #000000; /* Text color for menu items */

  &:last-child {
    border-bottom: none; /* Remove the separator for the last menu item */
  }
`;

const MobileMenu = () => {
    return (
        <MobileMenuContainer>
            <MobileMenuItem>Item 1</MobileMenuItem>
            <MobileMenuItem>Item 2</MobileMenuItem>
            <MobileMenuItem>Item 3</MobileMenuItem>
            <MobileMenuItem>Item 4</MobileMenuItem>
        </MobileMenuContainer>
    );
};




const MobileNavMenu = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen)

    return (
        <Container>
            <MobileMenuContainer>
                <MobileMenuItem>Item 1</MobileMenuItem>
                <MobileMenuItem>Item 2</MobileMenuItem>
                <MobileMenuItem>Item 3</MobileMenuItem>
                <MobileMenuItem>Item 4</MobileMenuItem>
            </MobileMenuContainer>
            <NavContainer>
                <LogoContainer to="/">
                    <ValidLogo width={"70px"} />
                    <h2>Valid Clothing</h2>
                </LogoContainer>
                <div onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                    {/* Display a mobile menu icon here */}
                    <MobileMenu />
                </div>
            </NavContainer>
            {isMobileMenuOpen && (
                <LinksContainer>
                    <Navlink to="shop">Shop</Navlink>
                    {currentUser ? (
                        <Navlink onClick={signOutUser}>Sign out</Navlink>
                    ) : (
                        <Navlink to="auth">Sign in</Navlink>
                    )}
                    <CartIcon />
                </LinksContainer>
            )}
            {isCartOpen && <CartDropDown />}
            <Outlet />
        </Container>
    );
};

export default MobileNavMenu;

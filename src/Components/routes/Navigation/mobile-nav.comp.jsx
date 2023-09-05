import { useSelector } from "react-redux";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { useMediaQuery } from "@uidotdev/usehooks";
import { styled } from "styled-components";

import { Navlink } from "./navigation-bar.styles";
import { Menu, MenuItem, MenuDivider } from '@szhsin/react-menu';
import CartIcon from "../../Cart-Icon/cart-icon.component";
import { selectCurrentUser } from "../../Store/user/userSelector";
import { signOutUser } from "../../Utils/Firebase/firebase.utils";
import { FiMenu } from "react-icons/fi";
import {MdMenuOpen} from "react-icons/md"



const HamburgerMenu = () => {
    const currentUser = useSelector(selectCurrentUser);

    const isSmallDevice = useMediaQuery("only screen and (min-width : 370px)");


    return (
        <Wrapper>
            <Menu menuButton={({ open }) => <ButtonContainer>{open ? <MdMenuOpen/> : <FiMenu />}</ButtonContainer> }>
                <MenuItem><Navlink to='/'>Home</Navlink></MenuItem>
                <MenuDivider />
                <MenuItem><Navlink to='/shop'>Shop</Navlink></MenuItem>
                <MenuDivider />
                <MenuItem>
                    {currentUser ? (
                        <Navlink onClick={signOutUser}>Sign out</Navlink>
                    ) : (
                        <Navlink to="auth">Sign in</Navlink>
                    )}
                </MenuItem>
            </Menu>
            {isSmallDevice && <h2>Valid Clothing</h2>}
            <CartIcon />
        </Wrapper>
    );
};

export default HamburgerMenu;


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px
`

const ButtonContainer = styled.button`
    outline: none;
    background: none;
    border: none;
    padding-top: 10px; 
    font-size: 35px;
`
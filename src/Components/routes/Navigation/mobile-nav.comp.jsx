import { Navlink } from "./navigation-bar.styles";
import { Menu, MenuItem, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import CartIcon from "../../Cart-Icon/cart-icon.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Store/user/userSelector";
import { signOutUser } from "../../Utils/Firebase/firebase.utils";
import { useMediaQuery } from "@uidotdev/usehooks";



const HamburgerMenu = () => {
    const currentUser = useSelector(selectCurrentUser);

    const isSmallDevice = useMediaQuery("only screen and (min-width : 370px)");


    return (
        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
            <Menu menuStyle={{ display: 'flex', padding: '10px 0px 20px 10px' }} menuButton={<button style={{ padding: '10px', margin: '10px 0px 20px 10px' }} type="button">Menu</button>}>
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
        </div>
    );
};

export default HamburgerMenu;

import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const NavContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

`


export const LogoContainer = styled(Link)`
display: flex;
align-items: center;
gap: 10px;
    height: 100%;
    width: auto;
    padding: 25px;
    `


export const LinksContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    `

export const Navlink = styled(Link)`
    padding: 10px 15px;
    text-transform: uppercase;
    cursor: pointer;
        `
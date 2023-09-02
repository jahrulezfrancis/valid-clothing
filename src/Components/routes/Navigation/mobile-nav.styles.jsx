import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 20px;
  background-color: #ffffff;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #000000;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Navlink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-weight: bold;
  cursor: pointer;
`;

export const Container = styled.div`
display: none
@media (max-width: 700px){
    display: block;
}
`
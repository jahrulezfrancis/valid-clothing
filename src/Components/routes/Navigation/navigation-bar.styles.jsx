import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const NavContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
  width: auto;
  padding: 25px;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const LinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 15px;
  }
`;

export const Navlink = styled(Link)`
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const BigNavContainer = styled.div`
  display: block;
    @media (max-width: 700px){
  display: none;
}
`

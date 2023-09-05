import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const NavContainer = styled.div`
    height: 100px;
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    box-shadow: 0px 15px 20px 0px rgba(198,174,174,0.75);
    -webkit-box-shadow: 0px 15px 20px 0px rgba(198,174,174,0.75);
    -moz-box-shadow: 0px 15px 20px 0px rgba(198,174,174,0.75);

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

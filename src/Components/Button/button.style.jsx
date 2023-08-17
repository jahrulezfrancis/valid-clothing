import { styled } from "styled-components";

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    border-radius: 7px;
    justify-content: center;

    &:hover {
        background-color: white;
        color: black;
        border-radius: 7px;
        box-shadow: -2px 4px 16px -2px rgba(75, 146, 230, 0.72);
        -webkit-box-shadow: -2px 4px 16px - 2px rgba(51, 132, 232, 0.72);
        -moz-box-shadow: -2px 4px 16px - 2px rgba(75, 146, 230, 0.72);
    }
`

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;
    border-radius: 7px;
    
    &:hover {
    background-color: #357ae8;
    border: none;
}

`
export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: none;
    box-shadow: -2px 4px 16px -2px rgba(75, 146, 230, 0.72);
    -webkit-box-shadow: -2px 4px 16px - 2px rgba(51, 132, 232, 0.72);
    -moz-box-shadow: -2px 4px 16px - 2px rgba(75, 146, 230, 0.72);
    outline: none;
    border-radius: 7px;

    &:hover {
    background-color: black;
    color: white;
    border: none;
`
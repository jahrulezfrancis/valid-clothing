import { styled } from "styled-components";
import Button from "../Button/buttton.component";


export const CardButton =  styled(Button)`
    min-width: 100px;
    width: auto;
    height: 40px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    border-radius: 7px;
    justify-content: center;
    align-items: center;

    @media(max-width: 800px){
      letter-spacing: 0px;
      line-height: 10px;
      padding: 0 15px 0 15px;
      font-size: 13px;
      width: auto;
      height: 30px;
    }
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    padding: 18px;
    border-radius: 8px;
    box-shadow: -1px 2px 14px 4px rgba(185,185,185,0.75);
    -webkit-box-shadow: -1px 2px 14px 4px rgba(185,185,185,0.75);
    -moz-box-shadow: -1px 2px 14px 4px rgba(185,185,185,0.75);
  
    img {
      width: 100%;
      height: 82%;
      object-fit: cover;
      margin-bottom: 5px;
      @media (max-width: 780px){
        height: 70%;
      }
    }
  
    &:hover {
      img {
        opacity: 0.8;
      }
    }
`

export const FooterContainer = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 18px;
  }
`

export const BottomElements = styled.div`
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
 `
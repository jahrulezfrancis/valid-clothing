import { styled } from "styled-components";


export const Container = styled.div`
   width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    position: relative;
    padding: 18px;
    border-radius: 8px;
    box-shadow: -1px 2px 14px 4px rgba(185,185,185,0.75);
    -webkit-box-shadow: -1px 2px 14px 4px rgba(185,185,185,0.75);
    -moz-box-shadow: -1px 2px 14px 4px rgba(185,185,185,0.75);
  
    img {
      width: 100%;
      height: 85%;
      object-fit: cover;
      margin-bottom: 5px;
    }
  
    button {
      width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 255px;
      display: none;
    }
  
    &:hover {
      img {
        opacity: 0.8;
      }
  
      button {
        opacity: 0.85;
        display: flex;
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

export const NameContainer = styled.span`
    width: 90%;
    margin-bottom: 15px;
`

export const PriceContainer = styled.span`
 width: 10%;
 `

 export const BottomElements = styled.div`
 display: flex;
 justify-content: space-between;
 `
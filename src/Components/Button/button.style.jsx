import styled, { keyframes } from 'styled-components';


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
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    border-radius: 7px;
    justify-content: center;
    align-items: center;

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


// Define a keyframe animation for the spinner
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Create a Styled Spinner component
export const StyledSpinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3); /* Border color and opacity */
  border-top: 4px solid #3498db; /* Top border color (blue in this example) */
  border-radius: 50%; /* Makes it a circle */
  width: 30px; /* Width of the spinner */
  height: 30px; /* Height of the spinner */
  animation: ${spin} 1s linear infinite; /* Apply the spin animation */
  margin: 0 auto; /* Center the spinner horizontally */
`;
import { styled } from "styled-components";
import { CardElement } from "@stripe/react-stripe-js";
import Button from "../../Button/buttton.component";

export const TopPaymentFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
`;

export const PaymentFormContainer = styled.form`
    width: 100%;
    max-width: 400px; /* Adjust the maximum width as needed */
    padding: 20px;
    background-color: #fff; /* Add a background color for better visibility */
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
    text-align: center;
`;

export const PaymentHeader = styled.h2`
     margin-bottom: 20px;
`;

export const PaymentButton = styled(Button)`
    background-color: #3498db;
    color: #fff;
    padding: 10px 20px;

    margin-top: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #2980b9;
    }
`;

export const StyledCardElement = styled(CardElement)`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;


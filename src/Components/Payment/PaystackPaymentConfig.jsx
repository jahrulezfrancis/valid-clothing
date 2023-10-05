import React from "react";
import styled from "styled-components";
import { usePaystackPayment } from "react-paystack";
import { emptyCart } from "../Store/Cart/cart.slice";
import { TopPaymentFormContainer } from "../Payment-form/Payment-form.styles";
import { useDispatch } from "react-redux";



const PayStackPaymentHandler = ({ email, amount }) => {

    const API_KEY = process.env.REACT_APP_PAYSTACK_PUB_KEY

    const dispatch = useDispatch()

    const config = {
        reference: new Date().getTime().toString(),
        email: email,
        amount: amount * 100,
        publicKey: API_KEY,
    };

    // you can call this function anything
    const onSuccess = (reference) => {

        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
        dispatch(emptyCart([]))
    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log("closed");
    };
    const initializePayment = usePaystackPayment(config);

    const handlePayment = () => {
        initializePayment(onSuccess, onClose);
    }

    return (
        <div>
            <TopPaymentFormContainer>
                <h3>Checkout with Paystack</h3>
                <BaseButton onClick={handlePayment} >Pay with Paystack</BaseButton>
            </TopPaymentFormContainer>
        </div>
    );
};

export default PayStackPaymentHandler;

const BaseButton = styled.button`
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
      background-color: #FFFADA;
      color: black;
      border-radius: 7px;
      box-shadow: -2px 4px 16px -2px rgba(75, 146, 230, 0.72);
      -webkit-box-shadow: -2px 4px 16px - 2px rgba(51, 132, 232, 0.72);
      -moz-box-shadow: -2px 4px 16px - 2px rgba(75, 146, 230, 0.72);
    }
`

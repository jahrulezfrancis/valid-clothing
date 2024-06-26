import React from "react";
import styled from "styled-components";
import { usePaystackPayment } from "react-paystack";
import { emptyCart } from "../../Store/Cart/cart.slice";
import { TopPaymentFormContainer } from "../Stripe/Payment-form.styles";
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

    const onSuccess = (reference) => {
        console.log(reference);
        dispatch(emptyCart([]))
    };

    const onClose = () => {
        console.log("closed");
    };
    const initializePayment = usePaystackPayment(config);

    const handlePayment = () => {
        initializePayment(onSuccess, onClose);
    }

    return (
        <div>
            <TopPaymentFormContainer>
                <BaseButton onClick={handlePayment}>Pay with Paystack</BaseButton>
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
    background-color: #3BB75E;
    color: white;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    border-radius: 7px;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #287C40;
      color: black;
      border-radius: 7px;
      box-shadow: -2px 4px 16px -2px rgba(75, 146, 230, 0.72);
      -webkit-box-shadow: -2px 4px 16px - 2px rgba(51, 132, 232, 0.72);
      -moz-box-shadow: -2px 4px 16px - 2px rgba(75, 146, 230, 0.72);
    }
`

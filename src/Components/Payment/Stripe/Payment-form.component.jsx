import React, { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../Store/user/userSelector";
import { selectCartTotal } from "../../Store/Cart/cart.selector";
import { showToast } from "../../Toast/Toast.container";
import { emptyCart } from "../../Store/Cart/cart.slice";
import { Button_Types } from "../../Button/buttton.component";
import {
  PaymentFormContainer,
  TopPaymentFormContainer,
  PaymentHeader,
  PaymentButton,
  StyledCardElement,
} from "./Payment-form.styles";

const StripePaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [processingPayment, setProcessingPayment] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const amount = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setProcessingPayment(true);

    try {
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: amount * 100 }),
        }
      );
      const data = await response.json();
      setProcessingPayment(false);

      if (!currentUser) {
        showToast("Please log in to make a purchase", "error");
      } else if (data.error) {
        showToast(
          `An error occurred: ${data.error.message}. Please try again.`,
          "error"
        );
      } else {
        const { paymentIntent } = data;
        if (paymentIntent.status === "succeeded") {
          showToast(
            `Payment of $${amount} was successful. You will receive an email shortly.`,
            "success"
          );
          setTimeout(() => {
            dispatch(emptyCart([]));
          }, 3000);
        }
      }
    } catch (error) {
      console.log(error );
      showToast("An error occurred. Please try again.", "error");
      setProcessingPayment(false);
    }
  };

  return (
    <TopPaymentFormContainer>
      <PaymentFormContainer onSubmit={handlePayment}>
        <PaymentHeader>Checkout with Stripe using a Credit Card:</PaymentHeader>
        <StyledCardElement />
        <PaymentButton
          isLoading={processingPayment}
          buttonType={Button_Types.inverted}
        >
          Pay Now
        </PaymentButton>
      </PaymentFormContainer>
      <p style={{ width: 400 }}>
        <span style={{ color: "red" }}>Please note:</span> This payment is in
        test mode. No actual card is required. Just use 4242 4x as your card
        number. The expiry date should be in the future, and the CVC and ZIP
        code can be any numbers.
      </p>
    </TopPaymentFormContainer>
  );
};

export default StripePaymentForm;

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button_Types } from "../Button/buttton.component";
import { PaymentFormContainer, TopPaymentFormContainer, PaymentHeader, PaymentButton, StyledCardElement } from "./Payment-form.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../Store/user/userSelector";
import { selectCartTotal } from "../Store/Cart/cart.selector";
import { Toast, showToast } from "../Toast/Toast.container";
import { useState } from "react";
import { emptyCart } from "../Store/Cart/cart.slice";



const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [processingPayment, setProcessingPayment] = useState(false)
    const currentUser = useSelector(selectCurrentUser)
    const amount = useSelector(selectCartTotal)
    const dispatch = useDispatch()

    const handlePayment = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        setProcessingPayment(true)

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json());
        setProcessingPayment(false)

        const paymentIntentClientSecret = response.paymentIntent.client_secret; // Get the client_secret

        const PaymentResult = await stripe.confirmCardPayment(paymentIntentClientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser && currentUser.displayName
                }
            }
        });

        if (!currentUser) {
            showToast("Please login in order to make your purchase", "error")
        } else if (PaymentResult.error) {
            showToast(`An error occured, ${PaymentResult.error.message} please try again`, 'error')
        } else {
            if (PaymentResult.paymentIntent.status === 'succeeded') {
                showToast(`Your payment of $${amount} was successful, thank you for your patronage`, 'success')
                setTimeout(() => {
                    dispatch(emptyCart([]))
                }, 3000)
            }
        }
    };

    return (
        <>
            <TopPaymentFormContainer>
                <p><span style={{ color: 'red' }}>Please note:</span> This Payment is in test mode and no actual card is required. Just type in 4242 4x as your card number, expiry date should be a future date while cvc and zip code can be any number</p>
                <Toast />
                <PaymentFormContainer onSubmit={handlePayment}>
                    <PaymentHeader>Credit card payment:</PaymentHeader>
                    <StyledCardElement />
                    <PaymentButton isLoading={processingPayment} buttonType={Button_Types.inverted}>
                        Pay Now
                    </PaymentButton>
                </PaymentFormContainer>
            </TopPaymentFormContainer>
        </>

    )
}
export default PaymentForm;
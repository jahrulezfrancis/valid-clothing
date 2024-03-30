import React from "react";
import { useDispatch } from "react-redux";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { setTransactionHistory, } from "../../Store/Payment/transactionSlice";
import { addNewTransactionHistory } from "../../Utils/Firebase/firebase.utils";
import { emptyCart } from "../../Store/Cart/cart.slice";
import "./flutterwave.styles.css"

export default function FlutterwavePaymentHandler({
  email,
  phone_number,
  name,
  amount
}) {
  const apiKey = (process.env.REACT_APP_FLUTERWAVE_PUB_KEY)
  const config = {
    public_key: apiKey,
    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phone_number,
      name: name
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg"
    }
  };
  const dispatch = useDispatch();

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
    console.log(response)
      addNewTransactionHistory({ flutterwaveData: response })
      dispatch(setTransactionHistory(response));
      dispatch(emptyCart([]))
      closePaymentModal();
    },
    onClose: () => { }
  };

  return (
    <div>
      <FlutterWaveButton className="checkout-button" {...fwConfig} />
    </div>
  );
}

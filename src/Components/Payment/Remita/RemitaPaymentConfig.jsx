import RemitaPayment from "react-remita";
import "./styles.css"

export default function RemitaPaymentHandler({ email, name, amount }) {
  const remita_key = process.env.REACT_APP_REMITA_PUB_KEY

  const paymentData = {
    key: remita_key,
    customerId: "",
    email: email,
    amount: amount,
    name: name,
    narration: "Item purchase",
  };

  let data = {
    ...paymentData,
    onSuccess: function (response) {
      // function callback when payment is successful
      console.log("callback Successful Response", response);
    },
    onError: function (response) {
      // function callback when payment fails
      console.log("callback Error Response", response);
    },
    onClose: function () {
      // function callback when payment modal is closed
      console.log("closed");
    },
  };

  return (
    <div className="App">
      <div className="container">
        <RemitaPayment
          remitaData={data}
          className="btn remita-pay-button" // class to style the button
          text="Pay with Remita" //text to show on button
          // add a 'live' prop to use the live urls/keys
        />
      </div>
    </div>
  );
}

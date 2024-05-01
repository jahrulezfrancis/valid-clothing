import { ReactComponent as EmptyCart } from "../../../Assets/empty-shopping-cart.svg";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../Store/Cart/cart.slice";
import {
  CartTable,
  TableData,
  RemoveButton,
  ButtonContainer,
  EmptyCartContainer,
  QuantityButton,
  TableHead,
  QuantityLabel,
  TableContainer,
  PaymentButtonsContainer,
} from "./checkout.style";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../Store/Cart/cart.selector";
import PayStackPaymentHandler from "../../Payment/Paystack/PaystackPaymentConfig";
import FlutterwavePaymentHandler from "../../Payment/FlutterWave/FlutterwaveConfig";
import StripePaymentForm from "../../Payment/Stripe/Payment-form.component";
import { selectCurrentUser } from "../../Store/user/userSelector";
import RemitaPaymentHandler from "../../Payment/Remita/RemitaPaymentConfig";
import { Navigate } from "react-router-dom";
import { Toast, showToast } from "../../Toast/Toast.container";
import { useEffect, useState } from "react";
import { fetchTransactionHistory } from "../../Utils/Firebase/firebase.utils";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [showCheckout, setShowCheckout] = useState(false)

  const uID = currentUser ? currentUser.uid : ""

  useEffect(() => {
    console.log(cartItems.map((item) => [item.name]))
  }, [])


  useEffect(() => {
    if (currentUser !== null) {
      setShowCheckout(true)
    } else {
      setShowCheckout(false)
    }
  }, [showCheckout, currentUser])

  useEffect(() => {
    fetchTransactionHistory(uID)
      .then((transactions) => {
        console.log(transactions);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return currentUser !== null ?
    (
      showCheckout ?
        <>
          <TableContainer>
            <CartTable>
              <thead>
                <tr>
                  <TableHead>Products</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Remove</TableHead>
                </tr>
              </thead>
              <tbody>
                {cartItems.length > 0 ? (
                  cartItems.map((cartItem) => {
                    const { id, name, imageUrl, quantity, price } = cartItem;
                    return (
                      <tr key={id}>
                        <TableData>
                          <img width="150px" src={imageUrl} alt={`${name}`} />
                        </TableData>
                        <TableData>{name}</TableData>
                        <TableData>
                          <ButtonContainer>
                            <QuantityButton
                              onClick={() => dispatch(removeItemFromCart(cartItem))}
                            >
                              &#10094;
                            </QuantityButton>
                            <QuantityLabel>{quantity}</QuantityLabel>
                            <QuantityButton
                              onClick={() => dispatch(addItemToCart(cartItem))}
                            >
                              &#10095;
                            </QuantityButton>
                          </ButtonContainer>
                        </TableData>
                        <TableData>₦{price}</TableData>
                        <TableData>
                          <RemoveButton
                            onClick={() => dispatch(clearItemFromCart(cartItem))}
                          >
                            X
                          </RemoveButton>
                        </TableData>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <TableData colSpan={5}>
                      <EmptyCartContainer>
                        <EmptyCart width="200px" height="auto" />
                        <h3>
                          Your cart is empty, please go to shop page and add more
                          products
                        </h3>
                      </EmptyCartContainer>
                    </TableData>
                  </tr>
                )}
                {cartItems.length > 0 && (
                  <tr>
                    <TableData rowSpan={2}>{`Total: ₦${totalPrice}`}</TableData>
                  </tr>
                )}
              </tbody>
            </CartTable>
          </TableContainer>
          {cartItems.length > 0 && (
            <div style={{ textAlign: "center" }}>
              <h2 style={{paddingTop: "50px"}}>Checkout with any of your preffered payment method</h2>
              <PaymentButtonsContainer>
                <div>
                  <FlutterwavePaymentHandler
                    name={currentUser.displayName}
                    email={currentUser.email}
                    amount={totalPrice}
                  />
                </div>

                <div>
                  <PayStackPaymentHandler
                    email={currentUser.email}
                    amount={totalPrice}
                  />
                </div>

                <div>
                  <RemitaPaymentHandler
                    email={currentUser.email}
                    name={currentUser.displayName}
                    amount={totalPrice}
                  />
                </div>
              </PaymentButtonsContainer>
              or
              <StripePaymentForm />
            </div>
          )}
        </>
        :
        "Your docment is still loading"
    )
    :
    (
      <>
        {showToast("You need to login before you can checkout", "error")}
        <Navigate to="/auth" replace="true" />
        <Toast />
      </>
    )
};
export default CheckoutPage;

import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { OnApproveData } from "@paypal/paypal-js/types/components/buttons";

interface PayPalButtonProps {
  onPaymentSuccess?: () => void;
  onPaymentFailure?: () => void;
  amount: string;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ amount, onPaymentSuccess, onPaymentFailure }) => {
  console.log('Amount in PayPalButton:', amount);

  const initialOptions = {
    clientId: "AQcmA6Go1uPHGFV5M6rIu44tTpwCleUl_UFLQ6f8CRThz79udi5qArlcUyry9eGoFCOpo0YYzik53b1u",
    currency: "USD",
    intent: "capture",
  };
  const createOrder = async (amountVlaue : any) => {
    let payload = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: amountVlaue,
          },
        },
      ],
    };

    try {
      const response = await fetch("http://localhost:3300/api/v1/orders/create_order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart: payload }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const order = await response.json();
      return order.id;
    } catch (error) {
      console.error('An error occurred while creating the order:', error);
      // handle the error as needed
    }
  };

  const onApprove = (data: OnApproveData) => {
    return fetch(`http://localhost:3300/api/v1/orders/complete_order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        order_id: data.orderID,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        //alert("Transaction completed by " + details.payer.name.given_name);
        onPaymentSuccess && onPaymentSuccess();
      })
      .catch((err) => {
        console.error(err);
        //alert("Error occurred during payment");
        onPaymentFailure && onPaymentFailure();
      });
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons createOrder={() => createOrder(amount)} onApprove={onApprove} />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;

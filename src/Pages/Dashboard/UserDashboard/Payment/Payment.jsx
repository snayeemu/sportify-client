import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK);
const Payment = () => {
  const [payClass, setPayClass] = useState({});
  const id = useParams();

  useEffect(() => {
    if (id) {
      fetch(`https://summer-camp-server-two-delta.vercel.app/aClass/${id.id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPayClass(data);
        });
    }
  }, []);

  return (
    <div>
      <h2 className="text-3xl">Pay Now</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          classId={payClass._id}
          price={payClass.price}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;

import { useState } from "react";
import { selectCartTotalPrice } from "../redux/cart/cart.slice";
import { useAppSelector } from "../redux/store";
import { Loader } from "lucide-react";
import axios from "axios";

function OrderSummary() {
  const cartItemTotalPrice = useAppSelector(selectCartTotalPrice);
   const [isPending, setIsPending] = useState(false);
   

 const generatePaymentLink = async (cartItemTotalPrice: number) => {
   setIsPending(true);

   try {
     // Convert amount to kobo
     const amountInKobo = cartItemTotalPrice * 100;

     const response = await axios.post(
       `https://api.paystack.co/transaction/initialize`,
       {
         amount: amountInKobo,
         email: "sample@gmail.com",
         callback_url: "http://localhost:3000",
       },
       {
         headers: {
           Authorization: `Bearer ${process.env.REACT_APP_PAYSTACK_SECRET_KEY}`,
         },
       }
     );

     if (response.data && response.data.data.authorization_url) {
       window.open(response.data.data.authorization_url, "_blank");
     }
   } catch (error) {
     console.error("Error generating link: ", error);
   } finally {
     setIsPending(false);
   }
 };


  const handleSubmit = () => {
    generatePaymentLink(Number(cartItemTotalPrice));
  };

  return (
    <div className="md:w-[26%]  sticky top-[10vh] h-fit">
      <h1 className="bg-gray-200 font-bold text-xl py-4 border-b border-b-gray-300 px-4 text-gray-500">
        Order Summary
      </h1>
      <div className="[&>div]:mb-3 [&>div]:text-sm [&>div]:px-4 py-5 bg-gray-200">
        <div className="flex justify-between items-center">
          <p>Subtotal</p>
          <p className="">${cartItemTotalPrice}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Shipping</p>
          <p className="">$00</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-green-500">Discount</p>
          <p className="text-green-500">$00</p>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 py-3 bg-gray-300">
        <h2 className="font-bold">Total</h2>
        <h2 className="font-bold">${cartItemTotalPrice}</h2>
      </div>
      <button
        className="py-3 text-center w-full bg-blue-500 mt-4 font-bold text-white"
        onClick={handleSubmit}
        disabled={isPending}
      >
        {isPending ? (
          <div className="flex justify-center items-center">
            Loading... <Loader className="ml-3 animate-spin" />
          </div>
        ) : (
          "Checkout"
        )}
      </button>
    </div>
  );
}
export default OrderSummary;

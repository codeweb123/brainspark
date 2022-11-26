//import { useState } from 'react'
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
//import { useSelector } from 'react-redux'
//import { selectCartTotal } from '../../store/cart/cart.selector';
//import { selectCurrentUser } from '../../store/user/user.selector';
import Button from '../button/button.component'
import './payment-form.styles.scss'

const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements()

    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: 1000 }),
        }).then((res) => res.json())
        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
                name:'Jiyon Trammell',
            },
          },
        });
    
        if (paymentResult.error) {
          alert(paymentResult.error);
        } else {
          if (paymentResult.paymentIntent.status === 'succeeded') {
            alert('Payment Successful!');
          }
        }
      };
    
    return (
        <form onSubmit={paymentHandler}> 
            <h2>Credit Card Payment: </h2>
            <CardElement />
            <Button type="submit">Pay Now </Button>
        </form>
    )
}

export default PaymentForm;

    //const amount = useSelector(selectCartTotal);
    //const currentUser = useSelector(selectCurrentUser);
    //const [isProcessingPayment, setIsProcessingPayment] = useState(false);

 //setIsProcessingPayment(true);

    //setIsProcessingPayment(false);


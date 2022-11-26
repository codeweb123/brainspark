require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51HQPZTL89azWpJQTRZ5WtsNDzYVvgePJLh2EID7q9lowxIUcLZ7C1LbRPpEcojYwVLK8gIpYxB5Me51A4uusVMSd00691dabgP"
);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};

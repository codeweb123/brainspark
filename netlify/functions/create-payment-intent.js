require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51M6nniGbcxB7Lr4KjuAAeyDLdwwdrsMXSw2bGWix2CN7ybOwSZECT5azlhmZEmwm97YaFn2cqm5IumLL56seUbrW00PaT1VPxq"
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

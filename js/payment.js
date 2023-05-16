// Replace 'YOUR_STRIPE_PUBLIC_KEY' with your actual Stripe publishable key
const stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY');
const elements = stripe.elements();

const cardNumberElement = elements.create('cardNumber');
cardNumberElement.mount('#card-number');

const cardExpiryElement = elements.create('cardExpiry');
cardExpiryElement.mount('#card-expiry');

const cardCvcElement = elements.create('cardCvc');
cardCvcElement.mount('#card-cvc');

const paymentForm = document.getElementById('payment-form');
const paymentResult = document.getElementById('payment-result');

paymentForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { paymentMethod, error } = await stripe.createPaymentMethod({
    type: 'card',
    card: cardNumberElement,
  });

  if (error) {
    paymentResult.textContent = `Error: ${error.message}`;
  } else {
    // Send the paymentMethod.id to your server for processing
    paymentResult.textContent = 'Payment successful!';
  }
});

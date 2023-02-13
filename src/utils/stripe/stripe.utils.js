import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(`${process.env.stripe_public_key}`);

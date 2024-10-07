import express from 'express';
import { PaymentControllers } from './payment.controller';

const router = express.Router();

// Initiate the SSL Payment Gateway
router.post('/sslCommerce', PaymentControllers.initiatePayment);

// Handle payment success
router.post('/success/:trans_id', PaymentControllers.handleSuccessPayment);

// Handle payment failure
router.post('/failed/:trans_id', PaymentControllers.handleFailedPayment);

// Get payment history by transaction ID
router.get('/payment-history/:trans_id', PaymentControllers.getPaymentHistory);

export const PaymentRoutes = router;

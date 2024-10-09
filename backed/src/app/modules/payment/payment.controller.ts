import { Request, Response } from 'express';
import { PaymentServices } from './payment.service';

// Initiate Payment
const initiatePayment = async (req: Request, res: Response) => {
  try {
    const paymentData = req.body;
    const result = await PaymentServices.createPaymentIntoDB(paymentData);
    res.send({ redirect_url: result.GatewayPageURL });
  } catch (error) {
    res.status(500).send({ error: 'Payment initiation failed.' });
  }
};

// Handle Successful Payment
const handleSuccessPayment = async (req: Request, res: Response) => {
  try {
    const { trans_id } = req.params;
    const result = await PaymentServices.updatePaymentStatusIntoDB(
      trans_id,
      true,
    ); // Set payment status to true

    if (result.modifiedCount > 0) {
      res.redirect(`http://localhost:5173/payment/success/${trans_id}`);
    } else {
      res.status(404).send({ error: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).send({ error: 'Payment success handling failed.' });
  }
};

// Handle Failed Payment
const handleFailedPayment = async (req: Request, res: Response) => {
  try {
    const { trans_id } = req.params;
    const result = await PaymentServices.deleteFailedPaymentIntoDB(trans_id); // Delete failed payment entry

    if (result.deletedCount) {
      res.redirect(`http://localhost:5173/payment/failed/${trans_id}`);
    } else {
      res.status(404).send({ error: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).send({ error: 'Payment failed handling failed.' });
  }
};

// Get Payment History by Transaction ID
const getPaymentHistory = async (req: Request, res: Response) => {
  try {
    const { trans_id } = req.params;
    const result = await PaymentServices.getPaymentHistoryFromDB(trans_id);
    if (result) {
      res.send(result);
    } else {
      res.status(404).send({ error: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).send({ error: 'Could not fetch payment history.' });
  }
};

export const PaymentControllers = {
  initiatePayment,
  handleSuccessPayment,
  handleFailedPayment,
  getPaymentHistory,
};

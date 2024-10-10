/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId } from 'mongodb';
import SSLCommerzPayment from 'sslcommerz-lts';
import config from '../../config';
import { TPaymentOrder } from './payment.interface';
import { PaymentHistory } from './payment.model';

const store_id = config.SSLCOMMERCE_STOREID;
const store_passwd = config.SSLCOMMERCE_STORE_PASSWORD;
const is_live = false; // Set to true for live mode

// Create a new payment and initiate SSLCommerz
const createPaymentIntoDB = async (orderInfo: TPaymentOrder) => {
  const trans_id = new ObjectId().toString();

  const data = {
    total_amount: orderInfo?.amount,
    currency: `${orderInfo?.currency}`,
    tran_id: `${trans_id}`,
    success_url: `http://localhost:5000/api/v1/payment/success/${trans_id}`,
    fail_url: `http://localhost:5000/api/v1/payment/failed/${trans_id}`,
    cancel_url: 'http://localhost:3030/cancel',
    ipn_url: 'http://localhost:3030/ipn',
    shipping_method: 'Courier',
    product_name: `${orderInfo?.productName}`,
    product_category: `${orderInfo?.category}`,
    product_profile: 'general',
    cus_name: `${orderInfo.name}`,
    cus_email: `${orderInfo.email}`,
    cus_add1: `${orderInfo.address}`,
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: `${orderInfo?.country}`,
    cus_phone: `${orderInfo.phone}`,
    cus_fax: '01711111111',
    ship_name: 'Customer Name',
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: '1000',
    ship_country: 'Bangladesh',
  };

  const sslcz = new (SSLCommerzPayment as any)(
    store_id as string,
    store_passwd as string,
    is_live,
  );
  const apiResponse = await sslcz.init(data);

  // Store payment info in the database with a pending status
  const paymentInfo = {
    orderInfo,
    transactionId: trans_id,
    payment_status: false,
    currency: data.currency,
    acct_no: trans_id,
    shipping_method: 'Online',
    date: new Date(),
  };

  await PaymentHistory.create(paymentInfo);

  return apiResponse;
};

// Update payment status on successful payment
const updatePaymentStatusIntoDB = async (trans_id: string, status: boolean) => {
  const result = await PaymentHistory.updateOne(
    { transactionId: trans_id },
    { $set: { payment_status: status } },
  );
  return result;
};

// Delete payment record for failed transactions
const deleteFailedPaymentIntoDB = async (trans_id: string) => {
  const result = await PaymentHistory.deleteOne({ transactionId: trans_id });
  return result;
};

// Get payment history by transaction ID
const getPaymentHistoryFromDB = async (trans_id: string) => {
  const result = await PaymentHistory.findOne({ transactionId: trans_id });
  return result;
};

export const PaymentServices = {
  createPaymentIntoDB,
  updatePaymentStatusIntoDB,
  deleteFailedPaymentIntoDB,
  getPaymentHistoryFromDB,
};

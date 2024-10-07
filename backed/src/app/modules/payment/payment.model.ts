import { Schema, model } from 'mongoose';

const paymentHistorySchema = new Schema(
  {
    transactionId: { type: String, required: true, unique: true },
    orderInfo: { type: Object, required: true },
    payment_status: { type: Boolean, default: false },
    currency: { type: String, required: true },
    acct_no: { type: String, required: true },
    shipping_method: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export const PaymentHistory = model('PaymentHistory', paymentHistorySchema);

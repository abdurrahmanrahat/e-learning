import { Schema, model } from 'mongoose';
import { TPayment } from './payment.interface';

const paymentSchema = new Schema<TPayment>(
  {
    courseId: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: [true, 'Course ID is required.'],
    },
    name: {
      type: String,
      required: [true, 'Name is required.'],
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
    },
    address: {
      type: String,
      required: [true, 'Address is required.'],
    },
    country: {
      type: String,
      required: [true, 'Country is required.'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required.'],
    },
    productName: {
      type: String,
      required: [true, 'Product name is required.'],
    },
    amount: {
      type: Number,
      required: [true, 'Amount is required.'],
    },
    category: {
      type: String,
      required: [true, 'Category is required.'],
    },
    city: {
      type: String,
      required: [true, 'City is required.'],
    },
    post_code: {
      type: String,
      required: [true, 'Post code is required.'],
    },
    currency: {
      type: String,
      required: [true, 'Currency is required.'],
    },
  },
  {
    timestamps: true,
  },
);

export const Payment = model<TPayment>('Payment', paymentSchema);

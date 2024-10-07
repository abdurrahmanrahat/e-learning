import { ObjectId } from 'mongoose';

export type TPaymentOrder = {
  courseId: ObjectId;
  name: string;
  email: string;
  address: string;
  country: string;
  phone: string;
  productName: string;
  amount: number;
  category: string;
  city: string;
  post_code: string;
  currency: string;
};

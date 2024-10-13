export type TCourse = {
  title: string;
  category: string;
  image: string;
  instructorImg: string;
  instructorName: string;
  instructorEmail: string;
  price: number;
  description: string;
  bigDescription: string;
  courseDuration: string;
  totalRatings: number;
  averageRatings: number;
  totalStudents: number;
  // status?: 'pending' | 'approved' | 'rejected';
  isDeleted?: boolean;
};

type TAuthorDetails = {
  authorName: string;
  authorImage: string;
  authorEmail: string;
};

export type TBlog = {
  image: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  date?: Date;
  author_details: TAuthorDetails;
};

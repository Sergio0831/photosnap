export type Price = {
  id: string;
  title: string;
  description: string;
  popular: boolean;
  price: {
    plan: string;
    amount: string;
  }[];
};

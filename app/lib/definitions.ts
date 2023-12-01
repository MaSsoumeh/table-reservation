export type Invoice = {
  id: string;
  amount: number;
  status: "pending" | "paid";
};

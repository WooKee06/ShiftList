export type User = {
  id: number;
  telegramId: string;
  username: string;
  firstName: string;
  lastName: string;
  language: string;
  isGoodWorker: boolean;
  createdAt: string;
  shifts: Shift[];
};

export type Shift = {
  id: number;
  userId: number;
  date: string;
  status: string;
  operation: string;
};

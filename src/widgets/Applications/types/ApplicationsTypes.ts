export interface User {
  id: number;
  telegramId: number;
  username: string;
  firstName: string;
  lastName: null;
  language: string;
  isGoodWorker: false;
  createdAt: number;
}

export interface ApplicationsProp {
  id: number;
  userId: number;
  date: number;
  status: string;
  operation: string;
  user: User;
}

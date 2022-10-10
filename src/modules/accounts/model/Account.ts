import { v4 as uuidV4 } from 'uuid';

class Account {
  id: string;
  created_at: Date;
  user_id: string;
  balance: number;

  constructor(user_id: string) {
    this.id = uuidV4();
    this.created_at = new Date()
    this.user_id = user_id;
    this.balance = 0;
  }
}

export { Account };
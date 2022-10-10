import { v4 as uuidV4 } from "uuid";

class Movement {
  id: string;
  account_id: string;
  type: string;
  value: number;
  date: Date;

  constructor(account_id: string, type: string, value: number) {
    this.id = uuidV4();
    this.account_id = account_id;
    this.type = type;
    this.value = value;
    this.date = new Date();
  }
}

export { Movement };
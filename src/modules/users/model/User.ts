import { v4 as uuidV4 } from 'uuid';

class User {
  id: string;
  created_at: Date;
  name: string;
  username: string;
  password: string;

  constructor(name: string, username: string, password: string) {
    this.id = uuidV4();
    this.created_at = new Date()
    this.name = name;
    this.username = username;
    this.password = password;
  }
}

export { User };
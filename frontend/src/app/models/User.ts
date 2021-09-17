export class User {
    id?: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    
    constructor() {
      this.id = 1;
      this.firstName = '';
      this.lastName = '';
      this.username = '';
      this.password = '';
    }
}


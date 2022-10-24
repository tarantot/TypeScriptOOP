class User {
    private _username;
    private _password;
    private _id;

    constructor (username, password) {
        this.username = username;
        this.password = password;
        this._id = this.getUniqueId();
    }

    private getUniqueId(): string {
        const dateStr = Date.now().toString(36); 
      
        const randomStr = Math.random().toString(36)
      
        return `${dateStr}-${randomStr}`;
    }


    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get id() {
        return this._id;
    }
}

const user1 = new User('tarantot', '12345')
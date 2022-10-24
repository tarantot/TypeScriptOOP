class Database {
    private _username;
    private _password;
    private _id = this.genUniqueId();
    private _url;
    private _port;
    private _tables;

    constructor (url, port, username, password) {
        this._url = url;
        this._port = port;
        this._username = username;
        this._password = password;
        this._tables = []
    }

    private genUniqueId(): string {
        const dateStr = Date.now().toString(36); 
      
        const randomStr = Math.random().toString(36)
      
        return `${dateStr}-${randomStr}`;
    }
    
    public createNewTable(table) {
        this._tables.push(table);
    }

    public clearTables(table) {
        this._tables.splice(this._tables.indexOf(table), 1);
    }


    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
    }

    get port() {
        return this._port;
    }

    set port(value) {
        this._port = value;
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
        return this.id;
    }
}

const database = new Database(1, 2, 3, 4)
database.createNewTable({name: 'users'})
database.createNewTable({name: 'locations'})
database.clearTables({name: 'useless'})
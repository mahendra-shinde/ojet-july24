export class Customer {
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _custId: string;

    constructor(){
        this._custId="";
        this._lastName="";
        this._email="";
        this._firstName="";    
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get email(){
        return this._email;
    }

}

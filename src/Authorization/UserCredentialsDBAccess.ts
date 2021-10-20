import { UserCredentials } from "../Shared/Model";
import * as Nedb from 'nedb';


export class UserCredentialsDBAccess {

    private nedb:Nedb ;

    constructor(){
        this.nedb = new Nedb('database/UserCredentials.db');
        this.nedb.loadDatabase();
    }

    public async putUserCredential(userCredentials: UserCredentials): Promise<any> {
        return new Promise((resolve, reject) => {
            this.nedb.insert(userCredentials, function (err: Error | null, docs: any):void {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(docs);
                    }
                })
        });
    }

    public async getUserCredentials(_username: string, _password: string):Promise<UserCredentials | undefined >{
        throw "";
    }
}
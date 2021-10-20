import { UserCredentials } from "../Shared/Model";
import * as Nedb from 'nedb';


export class UserCredentialsDBAccess {

    private nedb:Nedb = new Nedb('database/UserCredentials.db');

    public async putUserCredential(userCredentials: UserCredentials):Promise<any>{

    }

    public async getUserCredentials(username: string, password: string):Promise<UserCredentials | undefined {

    }
}
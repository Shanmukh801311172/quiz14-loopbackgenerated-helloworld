import { Model } from '@loopback/repository';
export declare class User extends Model {
    name: string;
    email: string;
    [prop: string]: any;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export type UserWithRelations = User & UserRelations;

import { Address } from "./address";
import { PersonRole } from "./person-role";

export interface Person {
    id?: number,
    name: string,
    //surname: string,
    email: string,
    birthDate: Date,
    role: PersonRole,
    address: Address,
    password: string
}

import { IUser } from "../interfaces/IProduct";


export class Producta implements IUser {
    id: 0;
    name: string;
    description: string;
    age: string;
    company: string;
    price: string;

    constructor(product: IUser){
        this.id = product.id;
        this.name = product.name.toUpperCase();
        this.description = product.description;
        this.age = product.age;
        this.company = product.company;
        this.price = product.price;
    }
}
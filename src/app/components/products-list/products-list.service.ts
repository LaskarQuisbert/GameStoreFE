import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./models/product.interface";

const BE_SERVER: string = 'http://localhost:57237';
const PRODUCT_API: string = '/api/v1/Product'

@Injectable()
export class ProductsListService {
    
    constructor(private httpClient: HttpClient) {}

    getAll(): any {
        return this.httpClient.get(`${BE_SERVER}${PRODUCT_API}`);
    }

    upsert(value: Product): any {
        return this.httpClient.post(`${BE_SERVER}${PRODUCT_API}`, value);
    }

    delete(value: Product): any {
        return this.httpClient.delete(`${BE_SERVER}${PRODUCT_API}/${value.id}`);
    } 
}
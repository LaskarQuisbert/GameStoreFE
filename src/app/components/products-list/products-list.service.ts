import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BE_SERVER, PRODUCT } from "src/app/core/api/Apis";
import { Product } from "./models/product.interface";

@Injectable()
export class ProductsListService {
    
    constructor(private httpClient: HttpClient) {}

    getAll(): any {
        return this.httpClient.get(`${BE_SERVER}${PRODUCT.GET}`);
    }

    upsert(value: Product): any {
        return this.httpClient.post(`${BE_SERVER}${PRODUCT.POST}`, value);
    }

    delete(value: Product): any {
        return this.httpClient.delete(`${BE_SERVER}${PRODUCT.DELETE}/${value.id}`);
    } 
}
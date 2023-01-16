import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/components/products-list/models/product.interface";
import { ProductsListService } from "../../products-list.service";

@Component({
    selector: 'products-list',
    styleUrls: ['products-list.component.scss'],
    template: `
        <div class="container">
            <product-count [items]="products"></product-count>    
            <button 
                *ngIf="!isCreating" 
                class="my-button"
                (click)="toggleCreating()">Add new product </button>
            <product-form
                *ngIf="isCreating"
                (submit)="handleCreate($event)"
                (cancel)="handleCancel()">
            </product-form>
            <table>
                <tbody>
                    <product-row
                        *ngFor="let product of products"
                        [detail]="product"
                        (edit)="handleEdit($event)"
                        (remove)="handleRemove($event)">
                    </product-row>
                </tbody>
            </table>
        </div>
    `
})
export class ProductsListComponent implements OnInit {
    products: Product[] = [];
    isCreating: boolean = false;

    constructor(private productsService: ProductsListService){}
    
    ngOnInit(){
        this.productsService.getAll()
            .subscribe((data: any) => this.products = data);
    }

    toggleCreating(){
        this.isCreating = !this.isCreating;
    }

    handleCreate(product: Product){
        this.productsService.upsert(product)
        .subscribe((data: Product) => this.products.push(data));
        this.isCreating = false;
    }

    handleEdit(event: any){
        this.productsService.upsert(event)
            .subscribe((data: Product) => {
                this.products = this.products.map( (product: Product) => {
                    if(product.id === data.id){
                        product = Object.assign({}, product, data);
                    }
                    return product;
                });
            })
    }
    
    handleRemove(event: any){
        this.productsService.delete(event).subscribe(() => {
            return this.products = this.products.filter( (product: Product) => 
            product.id !== event.id)
        });
    }

    handleCancel(){
        this.isCreating = false;
    }
}
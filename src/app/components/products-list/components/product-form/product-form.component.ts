import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Product } from '../../models/product.interface';


@Component({
    selector: 'product-form',
    styleUrls: ['product-form.component.scss'],
    template: `
        <div class="container">
            <div class="attribute">
                Name:
                <input 
                    type="text"
                    [value]="product.name"
                    (input)="onNameChange(name.value)"
                    #name>
            </div>
            <div class="attribute">
                Price *:
                <input 
                    type="text" 
                    [value]="product.price"
                    (input)="onPriceChange(price.value)"
                    #price>
                    </div>
            <div class="attribute">
                Company:
                <input 
                    type="text" 
                    [value]="product.company"
                    (input)="onCompanyChange(company.value)"
                    #company>
            </div>
            <div class="attribute">
                Age restriction *:
                <input 
                    type="text" 
                    [value]="product.ageRestriction"
                    (input)="onAgeChange(age.value)"
                    #age>
            </div>
            <div class="attribute">
                Description:    
                <input 
                    type="text" 
                    [value]="product.description"
                    (input)="onDescriptionChange(description.value)"
                    #description>
            </div>
            <button class="my-button" (click)="handleSubmit()">Save</button>
            <button class="my-button" (click)="handleCancel()">Cancel</button>

        </div>
    `
})
export class ProductFormComponent implements OnChanges {
    @Input()
    product: Product = {
        id: 0,
        name: "",
        price: "",
        company: "",
        ageRestriction: "",
        description: ""
    };

    @Output()
    submit: EventEmitter<any> = new EventEmitter();

    @Output()
    cancel: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnChanges(changes: any){
        if(changes.product){
            this.product = Object.assign({}, changes.product.currentvalue);
        }
    }

    onNameChange(value: string){
        this.product.name = value;
    }
    onPriceChange(value: string){
        this.product.price = value;
    }
    onCompanyChange(value: string){
        this.product.company = value;
    }
    onAgeChange(value: string){
        this.product.ageRestriction = value;
    }
    onDescriptionChange(value: string){
        this.product.description = value;
    }

    handleSubmit(){
        this.submit.emit(this.product)
    }

    handleCancel(){
        this.cancel.emit(this.product)
    }
}

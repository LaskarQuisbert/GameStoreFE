import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
    selector: 'product-row',
    styleUrls: ['product-row.component.scss'],
    template: `
    <tr class="row">
        <div class="card-edition" *ngIf="editing">
            <div *ngIf="editing">
            <div class="attribute">
                Name:
                <input 
                    type="text"
                    [value]="detail.name"
                    (input)="onNameChange(name.value)"
                    #name>
            </div>
            <div class="attribute">
                Price:
                <input 
                    type="text" 
                    [value]="detail.price"
                    (input)="onPriceChange(price.value)"
                    #price>
                    </div>
            <div class="attribute">
                Company:
                <input 
                    type="text" 
                    [value]="detail.company"
                    (input)="onCompanyChange(company.value)"
                    #company>
            </div>
            <div class="attribute">
                Age restriction:
                <input 
                    type="text" 
                    [value]="detail.ageRestriction"
                    (input)="onAgeChange(age.value)"
                    #age>
            </div>
            <div class="attribute">
                Description:    
                <input 
                    type="text" 
                    [value]="detail.description"
                    (input)="onDescriptionChange(description.value)"
                    #description>
            </div>
            <button class="my-button" (click)="handleEdit()">Save</button>
            <button class="my-button" (click)="toggleEdit()">Cancel</button>
        </div>
    </div>
        <div class="card-view" *ngIf="!editing" (click)="toggleEdit()">
            <div class="text">Name: {{detail.name}}</div>
            <div class="text">Price: {{detail.price}}</div>
            <div class="text">Company: {{detail.company}}</div>
            <div class="text">Age Restriction: {{detail.ageRestriction}}</div>
            <div class="text">Description: {{detail.description}}</div>
            
            <button class="my-button" (click)="onRemove()">Remove</button>
        </div>
    

    </tr>
    `
})
export class ProductRowComponent implements OnChanges {
    @Input()
    detail: Product;

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    editing: boolean = false;
    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.detail){
            this.detail = Object.assign({}, changes.detail.currentValue)
        }
        console.log('ngOnchanges', changes);
        
    }

    onNameChange(value: string){
        this.detail.name = value;
    }
    onPriceChange(value: string){
        this.detail.price = value;
    }
    onCompanyChange(value: string){
        this.detail.company = value;
    }
    onAgeChange(value: string){
        this.detail.ageRestriction = value;
    }
    onDescriptionChange(value: string){
        this.detail.description = value;
    }

    toggleEdit(){
        this.editing = !this.editing;
    }
    handleEdit(){
        this.edit.emit(this.detail)
        this.editing = false;
    }
    onRemove(){
        this.remove.emit(this.detail);
    }
}
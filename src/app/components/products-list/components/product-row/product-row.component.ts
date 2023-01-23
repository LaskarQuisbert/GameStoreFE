import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
    selector: 'product-row',
    styleUrls: ['product-row.component.scss'],
    template: `
    <tr class="row">
        <div class="card-edition" *ngIf="editing">
            <product-form
                [product]="item"
                (submit)="handleEdit($event)"
                (cancel)="toggleEdit()"
            ></product-form>    
        </div>
        <div class="card-view" *ngIf="!editing" (click)="toggleEdit()">
            <div class="text">Name: {{item.name}}</div>
            <div class="text">Price: {{item.price}}</div>
            <div class="text">Company: {{item.company}}</div>
            <div class="text">Age Restriction: {{item.ageRestriction}}</div>
            <div class="text">Description: {{item.description}}</div>
            
            <button class="my-button" (click)="handleRemove()">Remove</button>
        </div>
    

    </tr>
    `
})
export class ProductRowComponent{
    @Input()
    item: Product;

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    editing: boolean = false;
    constructor() {}

    toggleEdit(){
        this.editing = !this.editing;
    }
    handleEdit(product: Product){
        this.edit.emit(product)
        this.editing = false;
    }
    handleRemove(){
        this.remove.emit(this.item);
    }
}
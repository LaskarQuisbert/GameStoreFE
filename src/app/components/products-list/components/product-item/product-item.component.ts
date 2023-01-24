import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
    selector: 'product-row',
    styleUrls: ['product-item.component.scss'],
    template: `
    <div class="cal">
        <div class="card" *ngIf="editing">
            <product-form
                [product]="item"
                (submit)="handleEdit($event)"
                (cancel)="toggleEdit()"
            ></product-form>    
        </div>
        <div class="card" *ngIf="!editing">
            <div class="card-body" (click)="toggleEdit()">
                <div class="card-text"><small>Name: </small>{{item.name}}</div>
                <div class="card-text"><small>Price: </small>{{item.price}}</div>
                <div class="card-text"><small>Company: </small>{{item.company}}</div>
                <div class="card-text"><small>Age Restriction: </small>{{item.ageRestriction}}</div>
                <div class="card-text"><small>Description: </small>{{item.description}}</div>
            </div>
            <div class="card-footer">
                <button class="btn btn-danger btn-sm" (click)="toggleModal()">Remove</button>
            </div>
        </div>
        <confirm-modal
            *ngIf="swModal"
            [message]="MODAL_MESSAGE"
            (submit)="this.remove.emit(this.item)"
            (cancel)="toggleModal()"
        ></confirm-modal>
    </div>
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
    swModal: boolean = false;
    MODAL_MESSAGE = "Are you sure to delete this item?";

    constructor() {}

    toggleEdit(){
        this.editing = !this.editing;
    }

    toggleModal(){
        this.swModal = !this.swModal;
    }

    handleEdit(product: Product){
        this.edit.emit(product)
        this.editing = false;
    }
}
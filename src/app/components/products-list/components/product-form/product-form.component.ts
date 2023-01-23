import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.interface';
import { FormGroup, FormBuilder, Validators, RequiredValidator } from '@angular/forms';


@Component({
    selector: 'product-form',
    styleUrls: ['product-form.component.scss'],
    template: `
    <div class="product-form_container">
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <div>
                <div class="attribute">    
                    <p>Name: </p>
                    <input 
                        type="text"
                        placeholder="Enter a product name"
                        formControlName="name">
                    <p *ngIf="validateField('name')">This value is not valid</p>
                </div>
                <div class="attribute">    
                    <p>Price: </p>
                    <input 
                        type="number"
                        placeholder="Enter a price"
                        formControlName="price">
                    <p *ngIf="validateField('price')">Price given is not valid</p>
                </div>
                <div class="attribute">    
                    <p>Price: </p>
                    <input 
                        type="text"
                        placeholder="Enter a company name"
                        formControlName="company">
                    <p *ngIf="validateField('name')">This value is not valid</p>
                </div>
                <div class="attribute">    
                    <p>Price: </p>
                    <input 
                        type="number"
                        placeholder="Enter an age limit"
                        formControlName="ageRestriction">
                    <p *ngIf="validateField('name')">This value is not valid</p>
                </div>
                <div class="attribute">    
                    <p>Price: </p>
                    <textarea 
                        type="text"
                        placeholder="Enter a description"
                        formControlName="description">
                    </textarea>
                    <p *ngIf="validateField('name')">This value is not valid</p>
                </div>
            </div>
            <div class="product-form__buttons">
                <button 
                    type="submit"
                    [disabled]="form.invalid">
                    Save
                </button>
            </div>
        </form>
    </div>
`
})
export class ProductFormComponent implements OnInit {
    @Input()
    product?: Product;

    @Output()
    submit: EventEmitter<any> = new EventEmitter();

    @Output()
    cancel: EventEmitter<any> = new EventEmitter();

    form!: FormGroup;

    constructor(private readonly formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.initform();
    }

    initform(): FormGroup {
        return this.formBuilder.group({
            id: [this.product?.id || 0, []],
            name: [this.product?.name || "", [
                Validators.minLength(3),
                Validators.required,
                Validators.maxLength(50)
            ]],
            price: [this.product?.price || 0, [
                Validators.required,
                Validators.min(1),
                Validators.max(1000),
            ]],
            company: [this.product?.company || "", [
                Validators.required,
                Validators.maxLength(50)
            ]],
            ageRestriction: [this.product?.ageRestriction || 0, [
                Validators.min(0),
                Validators.max(100),
            ]],
            description: [this.product?.description || "", [
                Validators.maxLength(50)
            ]],
        })
    }

    validateField(value: string) {
        return this.form.get(value)?.errors;
    }

    onSubmit() {
        this.submit.emit(this.form.value);
    }

    handleCancel() {
        this.cancel.emit(this.product)
    }
}

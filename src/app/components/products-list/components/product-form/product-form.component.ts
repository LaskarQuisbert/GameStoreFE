import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'product-form',
    styleUrls: ['product-form.component.scss'],
    template: `
    <div class="">
        <form [formGroup]="form" (ngSubmit)="this.submit.emit(this.form.value)">
            <div class="form-control">
                <legend>{{product? "Edit item": "Create item"}}</legend>
                <div class="form-floating mb-2">    
                    <input 
                        maxlength="50"
                        required
                        type="text"
                        class="form-control"
                        placeholder="Enter a product name"
                        formControlName="name">
                    <label class="input-label">Name</label>
                    <div class="form-text error"
                        *ngIf="validateField('name')">
                        This field is required (max 50)</div>
                </div>
                <div class="form-floating mb-2">    
                    <input 
                        min="1"
                        max="1000"
                        required
                        type="number"
                        class="form-control"
                        placeholder="Enter a price"
                        formControlName="price">
                    <label class="input-label">Price</label>
                    <div class="form-text"
                        *ngIf="validateField('price')">
                        Price is required (1-1000)</div>
                </div>
                <div class="form-floating mb-2">    
                    <input
                        required
                        maxlength="50"
                        type="text"
                        class="form-control"
                        placeholder="Enter a company name"
                        formControlName="company">
                    <label class="input-label">Company</label>
                    <div class="form-text"
                        *ngIf="validateField('company')">
                    Company name is required (max 50)</div>
                </div>
                <div class="form-floating mb-2">    
                    <input 
                        min="0"
                        max="100"
                        type="number"
                        class="form-control"
                        placeholder="Enter an age limit"
                        formControlName="ageRestriction">
                    <label class="input-label">Age</label>
                    <div class="form-text"
                        *ngIf="validateField('ageRestriction')">
                        Age must be between 0-100</div>
                </div>
                <div class="form-floating mb-2">    
                    <textarea 
                        maxlength="100"
                        type="text"
                        class="form-control"
                        placeholder="Enter a description"
                        formControlName="description">
                    </textarea>
                    <label class="input-label">Description</label>
                    <div class="form-text"
                        *ngIf="validateField('description')">
                        Description invalid (max 50)</div>
                </div>
                <div>
                    <button 
                        type="reset"
                        class="btn btn-secondary custom"
                        (click)="this.cancel.emit(this.product)">
                        Cancel
                    </button>    
                    <button 
                        type="submit"
                        class="btn btn-primary custom"
                        [disabled]="form.invalid">
                        Save
                    </button>
                </div>
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
        return this.form.get(value)?.touched && this.form.get(value)?.errors;
    }
}

import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.interface';


@Component({
    selector: 'product-count',
    template: `
        <div>
            <h3>Product List!</h3>
            <div>
                Total Products: {{ items.length }}
            </div>
        </div>
    `
})
export class ProductCountComponent {
    @Input()
    items: Product[] = [];
    constructor() {}
}
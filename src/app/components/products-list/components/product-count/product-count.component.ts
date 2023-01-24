import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.interface';


@Component({
    selector: 'product-count',
    template: `
        <nav class="navbar bg-body">
            <h3 class="navbar-brand">Products List</h3>
            <div class="title">
                Total Products: {{ items.length }}
            </div>
        </nav>`
})
export class ProductCountComponent {
    @Input()
    items: Product[] = [];
    constructor() {}
}
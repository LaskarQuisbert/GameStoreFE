import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

// Containers
import { ProductsListComponent } from "./containers/products-list/products-list.component";
// Components
import { ProductCountComponent } from "./components/product-count/product-count.component";
import { ProductRowComponent } from "./components/product-item/product-item.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
// Services
import { ProductsListService } from "./products-list.service";
import { ConfirmModalComponent } from "./components/confirm-modal/confirm-modal.component";

@NgModule({
    declarations: [
        ProductsListComponent,
        ProductCountComponent,
        ProductRowComponent,
        ProductFormComponent,
        ConfirmModalComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports: [
        ProductsListComponent
    ],
    providers: [
        ProductsListService
    ]
})
export class ProductsListModule {}
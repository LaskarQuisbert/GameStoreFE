import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

// Containers
import { ProductsListComponent } from "./containers/products-list/products-list.component";
// Components
import { ProductCountComponent } from "./components/product-count/product-count.component";
import { ProductRowComponent } from "./components/product-row/product-row.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
// Services
import { ProductsListService } from "./products-list.service";

@NgModule({
    declarations: [
        ProductsListComponent,
        ProductCountComponent,
        ProductRowComponent,
        ProductFormComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        ProductsListComponent
    ],
    providers: [
        ProductsListService
    ]
})
export class ProductsListModule {}
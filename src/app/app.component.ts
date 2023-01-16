import { Component } from '@angular/core';
// import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameStoreFE';

  // constructor(private service:ProductService){
  //   this.service.getProducts().subscribe(data=>{console.log(data)});
  // }
}

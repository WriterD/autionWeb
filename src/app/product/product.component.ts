import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];
  private keyword: string;

  constructor(private productService: ProductService) { 

  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}

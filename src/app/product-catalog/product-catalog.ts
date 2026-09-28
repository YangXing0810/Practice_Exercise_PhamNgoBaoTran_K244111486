import { Component } from '@angular/core';
import { CatalogService } from '../services/catalog-service';

@Component({
  selector: 'app-product-catalog',
  standalone: false,
  templateUrl: './product-catalog.html',
  styleUrl: './product-catalog.css',
})
export class ProductCatalog {
  public categories: any
  constructor(cservice: CatalogService) {
    this.categories = cservice.getCategories()
  }
}
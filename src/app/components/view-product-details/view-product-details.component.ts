import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Models/product.model';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css']
})
export class ViewProductDetailsComponent implements OnInit {
  public product! : Product;
  constructor(private productService :ProductService,
    private route: ActivatedRoute,) { }
  
  ngOnInit(): void {
    let selectedProductId = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(selectedProductId).subscribe((res)=>{
      this.product = res.data;
    });
  }

}

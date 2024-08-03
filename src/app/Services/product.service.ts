import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddProductResponse } from '../Models/add -product-response.model';
import { AddSupplierResponse } from '../Models/add-supplier-respponse.model';
import { ProductResponse } from '../Models/product-response.model';
import { Product } from '../Models/product.model';
import { SupplierResponse } from '../Models/supplier-response.model';
import { Supplier } from '../Models/supplier.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://host1.open.uom.lk/';

  constructor(private http: HttpClient) {}
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  addProduct(product: Product): Observable<AddProductResponse> {
    return this.http.post<AddProductResponse>(
      this.baseUrl + 'api/products',
      product,
      this.httpOptions
    );
  }

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.baseUrl + 'api/products');
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'api/products', product);
  }

  getProductById(id: any){
    return this.http.get<any>(`${this.baseUrl}api/products/${id}`);
  }

 
}

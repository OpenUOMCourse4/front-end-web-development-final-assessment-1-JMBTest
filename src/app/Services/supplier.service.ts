import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupplierResponse } from '../Models/supplier-response.model';
import { Supplier } from '../Models/supplier.model';
import { Observable } from 'rxjs';
import { AddSupplierResponse } from '../Models/add-supplier-respponse.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private baseUrl = 'https://host1.open.uom.lk/';
  constructor(private http : HttpClient) { }

  getSuppliers(): Observable<SupplierResponse> {
   return this.http.get<SupplierResponse>(this.baseUrl + 'api/suppliers/');
  }

  
  addSupplier(supplier: Supplier): Observable<AddSupplierResponse> {
    return this.http.post<AddSupplierResponse>(
      `${this.baseUrl}api/suppliers/`,
      supplier
    );
  }

}

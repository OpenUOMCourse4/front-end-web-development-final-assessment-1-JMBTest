import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../Models/supplier.model';
import { SupplierService } from '../../Services/supplier.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css'],
})
export class SuppliersComponent implements OnInit {
  public rowIndex!: number;
  showAddSupplier!: boolean;
  isLoading: boolean = false;
  selectedSupplier!: Supplier;
  message!: string;
  public suppliers: Supplier[] = [];

  constructor(private supplierService: SupplierService) {}

  ngOnInit(): void {
    this.getSuppliers();
  }

  getSuppliers() {
    this.isLoading = true;
    this.supplierService.getSuppliers().subscribe((res) => {
      
      this.suppliers = res.data;
      console.log(this.suppliers)
      this.isLoading = false;
    });
  }

  public selectSupplier(selectedRow: any, supplier: Supplier) {
    this.rowIndex = selectedRow;
    this.selectedSupplier = supplier;
  }

  showAddSupplierView() {
    this.showAddSupplier = true;
  }

  hideAddSuppliers() {
    this.showAddSupplier = false;
  }

  refresh() {
    this.getSuppliers();
  }

  updateSupplierList() {
    this.getSuppliers();
  }
}

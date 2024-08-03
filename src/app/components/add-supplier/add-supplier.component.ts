import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Supplier } from '../../Models/supplier.model';
import { SupplierService } from '../../Services/supplier.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css'],
})
export class AddSupplierComponent implements OnInit {
  supplierFrom = this.fb.group({
    supplierName: ['', Validators.required],
    address: ['', Validators.required],
    joinedDate: ['', Validators.required],
    mobileNo: ['', [Validators.required,  Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
  });

  isDataUploading = false;
  @Output() cancelAddView: EventEmitter<void> = new EventEmitter<void>();
  @Output() supplierAddEvent :EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private supplierService: SupplierService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const values = this.supplierFrom.value as Supplier;
    this.isDataUploading = true;
    this.supplierService.addSupplier(values as Supplier).subscribe((res) => {
      this.isDataUploading = false;
      this.supplierFrom.reset();
      this.supplierAddEvent.emit();
    });
  }

  get f() {
    return this.supplierFrom.controls;
  }

  cancel() {
    this.cancelAddView.emit();
  }
}

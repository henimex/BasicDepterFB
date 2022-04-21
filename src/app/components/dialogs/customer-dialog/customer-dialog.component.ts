import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Customer } from "../../../models/customer";

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.css']
})
export class CustomerDialogComponent implements OnInit {

  header: string = "Debt Customer";
  addCustomerForm: FormGroup;
  customer: Customer;

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.addCustomerForm = this.formBuilder.group({
        id: [this.customer.id],
        name: [this.customer.name],
        mobile: [this.customer.mobile],
        address: [this.customer.address]
      }
    )
  }

}

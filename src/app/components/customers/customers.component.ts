import { Component, OnInit } from '@angular/core';
import { FireStoreApiService } from "../../services/fire-store-api.service";
import { Customer } from "../../models/customer";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { CustomerDialogComponent } from "../dialogs/customer-dialog/customer-dialog.component";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];
  dataSource: any;
  displayedColumns = ['Name', 'Mobile', 'Address', 'Actions']
  //dialogRef: MatDialogRef<CustomerDialogComponent>

  constructor(
    private fsService: FireStoreApiService,
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  getCustomers() {
    this.fsService.getCustomers().subscribe((data) => {
      this.customers = data.map(a => {
        return {
          id: a.payload.doc.id,
          ...(a.payload.doc.data() as object)
        } as Customer
      })
      this.dataSource = new MatTableDataSource(this.customers);
    })
  }

  addCustomer(){
    const dialogRef = this.matDialog.open(CustomerDialogComponent, {
      width: '500px',
      data:{
        operation:'Add Data'
      }
    })
  }

}

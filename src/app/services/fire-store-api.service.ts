import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Customer } from "../models/customer";

@Injectable({
  providedIn: 'root'
})
export class FireStoreApiService {

  collectionName: string = 'customers';

  constructor(
    private apiService: AngularFirestore
  ) {
  }

  getCustomers() {
    const data = this.apiService.collection(this.collectionName).snapshotChanges();
    console.log(data);
    return data;
  }

  getCustomerById(customerId: string) {
    return this.apiService.collection(this.collectionName).doc(customerId).valueChanges();
  }

  addCustomer(customer: Customer) {
    //delete customer.id;
    return this.apiService.collection(this.collectionName).add(customer);
  }

  updateCustomer(customer: Customer) {
    return this.apiService.collection(this.collectionName).doc(customer.id).update(customer);
  }

  deleteCustomer(customerId: string) {
    return this.apiService.collection(this.collectionName).doc(customerId).delete();
  }


}

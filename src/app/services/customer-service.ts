import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private _url: string = "./assets/data/customers.json";
  constructor(private _http: HttpClient) { }

  getCustomerGroups(): Observable<any[]> {
    return this._http.get<any[]>(this._url)
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productModelDTO } from '../models/productModelDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl="http://localhost:3000/products"

  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get(this.apiUrl)
  }


  getProduct(id: number): Observable<productModelDTO> {
    return this.http.get<productModelDTO>(`${this.apiUrl}/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productModelDTO } from '../models/productModelDTO';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl=""

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<any>(this.apiUrl)
  }
}

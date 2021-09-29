import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import * as data from 'src/assets/data.json';
import { environment as env } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    const api: string = env.api_url;
    return this.http.get<Product[]>(api);
  }
}

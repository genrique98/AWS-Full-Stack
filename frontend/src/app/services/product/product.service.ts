import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import * as data from 'src/assets/data.json';
// import * as dotenv from "dotenv";
// dotenv.config();

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    const api: string = "http://backend-env.eba-gpma9uyx.us-west-1.elasticbeanstalk.com/products" ;//process.env.PRODUCTS_API_URL as unknown as string;
    return this.http.get<Product[]>(api);
  }
}

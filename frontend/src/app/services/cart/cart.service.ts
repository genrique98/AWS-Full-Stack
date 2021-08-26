import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Cart } from 'src/app/models/Cart';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart[] = []

  constructor() {}

  getProductsInCart(): Cart[] {
    return this.cart;
  }

  addProductToCart(product: Product, quantity: number) {
    let item: Cart = {product, quantity}
    let exists = this.cart.find(item => item.product.id == product.id)

    if(!exists) { // if cart does not contain product, add it
      this.cart.push(item)
    } 
  }


  getTotalCost(): number {
    let total: number = 0;
    this.cart.forEach(item => {
      total += item.product.price * item.quantity;
    })
    //round total
    return total;
  }

  // getTotalQuantity(): number {
  getTotalQuantity(): Observable<number> {
    let total: number = 0;
      this.cart.forEach(item => {
        total += item.quantity;
      })
    let test: Observable<number> = new Observable((observer) => {
      observer.next(total)
      observer.complete()
      return {
        unsubscribe() {}
      }
    });
    return test;
  }

  emptyCart(): void {
    this.cart = []
  }

   
}

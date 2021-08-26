import { Component, OnInit, OnChanges, Output, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private cartService: CartService) { }

  badgeNumber: number = 0
  
  ngOnInit(): void {
    // this.badgeNumber = this.cartService.getTotalQuantity()
    this.cartService.getTotalQuantity().subscribe(res => {
      this.badgeNumber = res;
    })
  }

  update(_arg: Event): void {
    
  }

}

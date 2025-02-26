import { Component, Input, Output, output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-buy-button',
  imports: [FormsModule,NgClass,CommonModule],
  standalone:true,
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.css']
})
export class BuyButtonComponent {
  @Input() stock: number = 0;
  @Input() price: number = 0;
  @Output() buy = new EventEmitter<number>();

  orderCount: number = 0;

  buyProduct() {
    if (this.orderCount > 0 && this.orderCount <= this.stock) {
      this.buy.emit(this.orderCount);
    } else {
      alert("Invalid quantity!");
    }
  }

}

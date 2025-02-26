import { Component, Input, OnChanges, OnInit, Output, output, SimpleChange, SimpleChanges } from '@angular/core';
import { HovershadowDirective } from '../../directives/hovershadow.directive';
import { CalcPipe } from '../../pipes/calc.pipe';
import { IProduct } from '../../models/iproduct';
import { CommonModule, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { BuyButtonComponent } from '../buy-button/buy-button.component';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ICategory } from '../../models/icategory';
import { TempalateDerivenFormcomponent } from '../forms/template-deriven-form/template-deriven-form.component';
import { StaticDataService } from '../../services/static-data.service';

@Component({
  selector: 'app-products',
  imports: [HovershadowDirective,UpperCasePipe,BuyButtonComponent,CalcPipe,TruncatePipe,FormsModule,RouterModule,TempalateDerivenFormcomponent,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges, OnInit {
  

    filteredList: IProduct[] = [];
    showForm: boolean = false;
    showEdit: boolean = false;
    productDetails: IProduct = {} as IProduct;
    catList: ICategory[] = [];
  
    @Input() resivedId: number = 0;
    totalPrice: number = 0;
    @Output() Total = new EventEmitter<number>();
  
    constructor(private staticData: StaticDataService) {
      this.catList = [
        { id: 1, name: 'Makeup' },
        { id: 2, name: 'Others' }
      ];
    }
  
    ngOnInit(): void {
      this.filteredList = this.staticData.getAllprod();
    }
  
    ngOnChanges(): void {
      this.filterbyId();
    }
  
    filterbyId() {
      this.filteredList = this.staticData.getPrdByCatId(this.resivedId);
    }
  
    toggleForm() {
      this.showForm = !this.showForm;
    }
  
    toggleEdit(id: number) {
      this.showEdit = !this.showEdit;
      if (this.showEdit) {
        this.productDetails = { ...this.staticData.getprdById(id) ?? {} as IProduct };
      }
    }
  
    updateProduct() {
      this.staticData.editProdById(this.productDetails.id, this.productDetails);
      this.toggleEdit(0);
    }
  
    deleteProduct(id: number) {
      if (confirm("Are you sure you want to delete this product?")) {
        this.staticData.deleteProdById(id);
        this.filteredList = this.filteredList.filter(p => p.id !== id);
      }
    }
  
    viewDetails(product: IProduct) {
      alert(`Product: ${product.title}\nCategory: ${product.category}\nPrice: $${product.price}\nStock: ${product.stock}`);
    }
  
    buybtn(count: number, pro: IProduct) {
      if (count <= pro.stock && count > 0) {
        pro.stock -= count;
        this.totalPrice += count * pro.price;
        this.Total.emit(this.totalPrice);
      } else {
        alert("Stock is empty!");
      }
    }
  
    validate(product: IProduct, quantity: number) {
      console.log(`Validating product:`, product, `Quantity:`, quantity);
    }
  
    trackById(index: number, item: IProduct) {
      return item.id;
    }
  }
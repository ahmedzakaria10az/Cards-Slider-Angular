import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/icategory';

@Component({
  selector: 'app-masterproducts',
  imports: [ProductsComponent, FormsModule],
  templateUrl: './masterproducts.component.html',
  styleUrl: './masterproducts.component.css'
})
export class MasterproductsComponent {
  selectedId:number;
  totalproPrice:number;
  catList:ICategory[];


  constructor() {
    this.selectedId=0,
    this.catList=[{
      id:1 , name: 'Makeup'},
    
        {id:2 ,name:'others'}
      ],
      this.totalproPrice=0

   }
   resivedPrice(total:number){
 this.totalproPrice= total
   }
  }



import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../../models/iproduct';
import { StaticDataService } from '../../../services/static-data.service';

@Component({
  selector: 'app-template-deriven-form',
  imports: [FormsModule],
  templateUrl: './template-deriven-form.component.html',
  styleUrl: './template-deriven-form.component.css'
})
export class TempalateDerivenFormcomponent {

  newprod:IProduct = {} as IProduct
  
    constructor( public newdata: StaticDataService) {}
  
      addprod() {
        this.newdata.postProd(this.newprod)
      }
      
    
  
  }
  
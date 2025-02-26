import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../models/iproduct';
import { ActivatedRoute } from '@angular/router';
import { StaticDataService } from '../../../services/static-data.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  standalone:true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  reseveId:number=0
  produc:IProduct| null = null
    constructor( private active:ActivatedRoute , private data: StaticDataService) { 
      this.reseveId= Number( this.active.snapshot.paramMap.get('id'))
    }
    GoBack() {
      window.history.back(); 
    }
    ngOnInit() {
      this.produc = this.data.getprdById(this.reseveId)
    }
  
  }
  
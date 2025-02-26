import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {
  prodList:IProduct[]
  constructor() { 
    this.prodList =[
      {
      id:1,
      title:"Essence Mascara Lash Princess",
      description:"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category:1,
      price:9.99,
      stock:0,
      imgurl:"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
      },
      {
       id: 2,
      title: "Eyeshadow Palette with Mirror",
      description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: 1,
      price: 19.99,
      stock:5,
      imgurl:"https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
  
      },
  
      {
       id: 3,
      title: "Powder Canister",
      description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      category: 1,
      price: 14.99,
      stock:59,
      imgurl:"https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
  
      },
  
      {
       id: 4,
      title: "Red Lipstick",
      description: "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      category:1,
      price: 12.99,
      stock:0,
      imgurl:"https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
  
      },
      {
       id: 5,
      title: "Red Nail Polish",
      description: "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      category: 2,
      price: 8.99,
      stock:71,
      imgurl:"https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"
  
      },
  
      {
       id: 6,
      title: "Calvin Klein CK One",
      description: "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      category: 2,
      price: 49.99,
      stock:19,
      imgurl:"https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png"
  
      },
  
    ]
  }
  
  getAllprod():IProduct[] {
  return this.prodList
  }
  
  getPrdByCatId(catId:number):IProduct[]{
  
    if(catId===0){
      return this.prodList
    }else{
      return this.prodList.filter((p)=> p.category == catId)
    }
  }
  
  getprdById(proId:number){
    let prd = this.prodList.find((p)=> p.id === proId)
    return prd? prd : null
  }

  postProd(prod:IProduct){
    this.prodList.push(prod)
  }

  deleteProdById(dpId:number){
    let prod= this.prodList.find((p)=> p.id === dpId)
    let indx= this.prodList.indexOf(prod as IProduct)
  this.prodList.splice(indx,1)
  }
  
  editProdById(pId:number,epId:IProduct){
    let prod= this.prodList.find((p)=> p.id === pId)
    let indx= this.prodList.indexOf(prod as IProduct)
  this.prodList.splice(indx,1,epId)
  }
  
  }
  
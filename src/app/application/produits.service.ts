import { Injectable } from '@angular/core';
import { Produit } from './Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  products =[
    new Produit(15, 'montre'),
    new Produit(32, 'cartable'),
    new Produit(45, 'cahier'),
    new Produit(96, 'tablier')
  ]

 constructor() { }
 public getProduitByID(id:number):Produit 
 {
   let i:number;
   for(i=0;i<this.products.length;i++)
   {
     if(id==this.products[i].id)
     return this.products[i];
   }
   return null;
 }

 public addProduit(id: number, libelle:string):boolean 
 {
    if(this.getProduitByID(id)==null) 
    {
      let obj:Produit=new Produit(id,libelle);
      this.products.push(obj); 
      return true;
    }
    return false ;


 }

}

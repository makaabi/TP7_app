import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ProduitsService} from '../produits.service';



@Component({
  selector: 'app-add-produit',
  template: `
  <h1>Ajout d'un produit</h1>
  <form (ngSubmit)="onSubmit(f)" #f="ngForm">
  <div class="form-group ml-4">
    <label for="mat">
    Identifiant du produit
    </label>
  <input #identif="ngModel"  required type="text" id="mat" [(ngModel)]="identifiant" name="nid" class="form-control">
    </div>
    <div *ngIf="identif.invalid && identif.dirty" class="alert alert-danger">
 L'identifiant doit être un nombre
 </div>
    <div class="form-group ml-4">
 <label for="libelle">
 Libellé du produit
 </label>
<input #lib="ngModel"  type="text" id="libelle" [(ngModel)]="libelle"  name="lib" class="form-control" required pattern="[A-Z][a-zA-Z]+">
 </div>
 <div *ngIf="lib.errors?.pattern && lib.dirty" class="alert alert-danger">
 Le libellé doit commencer par une majuscule suivie d'au moins 1 caractère
 </div>

 <div [hidden] ="!submitted">
{{message}}
 </div>

 <input type="submit" value="Enregistrer" class="btn btn-success" [disabled]="f.invalid" >
 <input type="reset" value="Vider" class="btn btn-danger">
 </form>
 <!-- {{lib.className}}-->
 <!---->




 
  `,
  styles: [
    'input.ng-valid{ border-left: 2px solid green;}',
    'input.ng-invalid{ border-left: 2px solid red;}',
  ]
})
export class AddProduitComponent implements OnInit {
  identifiant:number;
  libelle:string;
  message:string;
  submitted:boolean=false;


  constructor(private produitsService:ProduitsService) { }

  ngOnInit() {
  }
  onSubmit(f:NgForm)
 { 
    console.log(this.identifiant+ " "+ this.libelle);
    console.log("-- "+f.value['nid']+" "+ f.value['lib']);
    let test:boolean=this.produitsService.addProduit(this.identifiant,this.libelle);

    if (test)
    this.message="Votre nouveau produit …. a bien été ajouté";
    else
    this.message="Le produit d’id …… existe déjà !";

    this.submitted=true;


}


}

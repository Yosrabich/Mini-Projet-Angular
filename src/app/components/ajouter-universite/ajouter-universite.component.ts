import { Component, OnInit } from '@angular/core';
import {UniversiteService} from "../../shared/services/universite.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Universite} from "../../shared/models/universite";

@Component({
  selector: 'app-ajouter-universite',
  templateUrl: './ajouter-universite.component.html',
  styleUrls: ['./ajouter-universite.component.css']
})
export class AjouterUniversiteComponent implements OnInit {
   nomUniv :String;
   adresseUniv : String;
   universite: Universite = new Universite();
  constructor(private service: UniversiteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }

  Ajouter(){
     console.log(this.nomUniv)
     console.log(this.adresseUniv)
    this.universite.nomUniv= this.nomUniv;
     this.universite.adresse=this.adresseUniv;
    this.service.AjouterUniversite(this.universite).subscribe(data=>{
      console.log(data)
      this.nomUniv="";
      this.adresseUniv="";
    })

  }

}

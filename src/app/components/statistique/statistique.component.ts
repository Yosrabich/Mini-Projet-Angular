import { Component, OnInit } from '@angular/core';
import {Departement} from "../../shared/models/departement";
import {ServiceService} from "../../shared/services/departement.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Universite} from "../../shared/models/universite";
import {UniversiteService} from "../../shared/services/universite.service";

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  idUniv!:number;
  universite: Universite = new Universite();
  nbEtudiants:number=0;
  nbDepartement:number=0;
  constructor(private Service: UniversiteService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {

      this.idUniv= data['id']
      console.log(this.idUniv)

    });

    this.Service.AfficherUniversiteSpecifique(this.idUniv).subscribe(res=>this.universite=res);
    console.log(this.universite)

    this.Service.NombreEtudiantDansUneUniversite(this.idUniv).subscribe(res=>{
      if(res!=null)
        this.nbEtudiants=res
      else
        this.nbEtudiants=0});

    this.Service.NombreDepartementDansUneUniversite(this.idUniv).subscribe(res=>{
      if (res!=null)
        this.nbDepartement=res
      else
        this.nbDepartement=0;
    })


  }


}

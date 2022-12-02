import {Component, OnInit} from '@angular/core';
import {UniversiteService} from "../../shared/services/universite.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Universite} from "../../shared/models/universite";
import {Departement} from "../../shared/models/departement";

@Component({
  selector: 'app-afficher-universite',
  templateUrl: './afficher-universite.component.html',
  styleUrls: ['./afficher-universite.component.css']
})
export class AfficherUniversiteComponent implements OnInit {
  tab: any [];
  univ: Universite = new Universite();
  idUniv!: number;
  universite: Universite = new Universite();
  un: Universite = new Universite();

  constructor(private service: UniversiteService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.service.AfficherTousLesUniversite().subscribe(data => {
      this.tab = data;
      console.log(this.tab)
    })
  }
  delete (u:Universite)
  {
    console.log(u);
    this.service.SupprimerUniversite(u).subscribe(() => this.service.AfficherTousLesUniversite().subscribe(
      x => this.tab = x
    ))
  }


  SaveData(univv : Universite){
      this.un.idUniv = univv.idUniv;
      this.un.nomUniv = univv.nomUniv;
      this.un.adresse = univv.adresse;
  }
  edit( up : Universite) {

    console.log(up.idUniv);
    console.log(up.nomUniv);
    console.log(up.adresse);


    this.service.ModifierUniversite(up).subscribe((data) => {
     console.log(data)
      this.service.AfficherTousLesUniversite().subscribe(data => {
        this.tab = data;

      })
   });
  }
}

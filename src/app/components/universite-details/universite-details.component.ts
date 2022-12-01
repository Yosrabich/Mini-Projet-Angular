import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Universite} from "../../shared/models/universite";
import {UniversiteService} from "../../shared/services/universite.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-universite-details',
  templateUrl: './universite-details.component.html',
  styleUrls: ['./universite-details.component.css']
})
export class UniversiteDetailsComponent implements OnInit {
  tab: any [];
  myForm!: FormGroup;
  form!: FormGroup;
  univ: Universite = new Universite();
  idUniv!: number;
  universite: Universite = new Universite();

  constructor(private service: UniversiteService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.service.AfficherTousLesUniversite().subscribe(data => {
      this.tab = data;
      console.log(this.tab)
    })

  }

  Ajouter() {
    console.log(this.univ)
    this.service.AjouterUniversite(this.univ).subscribe(() => {
      this.service.AfficherTousLesUniversite();
    })
  }

  delete(u: Universite) {
    console.log(u);
    this.service.SupprimerUniversite(u).subscribe(() => this.service.AfficherTousLesUniversite().subscribe(
      x => this.tab = x
    ))
  }


}

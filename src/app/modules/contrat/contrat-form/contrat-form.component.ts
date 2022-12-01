import {Component, OnInit} from '@angular/core';
import {ContratService} from "../../../shared/services/contrat.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LowerThan} from "./validateur";
import {Contrat} from "../../../shared/models/contrat";

@Component({
  selector: 'app-contrat-form',
  templateUrl: './contrat-form.component.html',
  styleUrls: ['./contrat-form.component.css']
})
export class ContratFormComponent implements OnInit {
  form !: FormGroup;
  contrat: Contrat = new Contrat();

  constructor(private service: ContratService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      archive: new FormControl('', [Validators.required, Validators.pattern('[0-1]{1}')]),
      dateDebut: new FormControl('', Validators.required),
      dateFin: new FormControl('', Validators.required),
      montant: new FormControl('', Validators.required),
      specialite: new FormControl('', Validators.required)
    }, {
      validators: [LowerThan]
    });
  }

  ajouterContrat() {
    this.service.addContrat(this.contrat).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/contrats']);
    });
  }

}

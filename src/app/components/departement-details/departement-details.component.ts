import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Departement} from 'src/app/shared/models/departement';
import {ServiceService} from '../../shared/services/departement.service';

@Component({
  selector: 'app-departement-details',
  templateUrl: './departement-details.component.html',
  styleUrls: ['./departement-details.component.css']
})
export class DepartementDetailsComponent implements OnInit {
  idDepart!: number;
  Dept: Departement = new Departement();
  nbEtudiants: number = 0;

  constructor(private myService: ServiceService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {

      this.idDepart = data['id']
      console.log(this.idDepart)

    });

    this.myService.getDepartementById(this.idDepart).subscribe(res => this.Dept = res);
    console.log(this.Dept)

    this.myService.getNombreEtudiantByDepart(this.idDepart).subscribe(res => {
      if (res != null)
        this.nbEtudiants = res
      else
        this.nbEtudiants = 0
    });


  }


}

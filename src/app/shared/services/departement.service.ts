import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../models/departement';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API_URL:string="http://localhost:8092"
  constructor(private _http:HttpClient) { }
  addDepartement(d:Departement):Observable<Departement>{
    return this._http.post<Departement>(this.API_URL+'/Departement/AjouterDepartement',d);
  }
  getAllDepartements():Observable<Departement[]> {
    return this._http.get<Departement[]>(`${this.API_URL}/Departement/getAllOrderByNomDepartAsc`)
  }
  deleteDepartement(d:Departement):Observable<Departement>{
    return this._http.delete<Departement>(`${this.API_URL}/Departement/DeleteDepartement/${d.idDepart}`)
  }
  editDepartement(d:Departement){
    return this._http.put(`${this.API_URL}/Departement/ModifierDepartement`, d)
  }
  getDepartementById(idDepart:number):Observable<Departement>{
    return this._http.get<Departement>(`${this.API_URL}/Departement/AfficherDepartement/${idDepart}`)

  }
  getNombreEtudiantByDepart(idDepart:number):Observable<number>{
    return this._http.get<number>(`${this.API_URL}/Etudiant/nombreEtudiantsByDepartement/${idDepart}`)

  }
  getChefDepart(idDepart:number,fonction:string){
    return this._http.get(`${this.API_URL}/Enseignat/getChefDepart/${fonction}/${idDepart}`)
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contrat} from "../models/contrat";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  API_URL: string = "http://localhost:8092/Contrat"

  constructor(private _http: HttpClient) {
  }

  getAllContrats(): Observable<Contrat[]> {
    return this._http.get<Contrat[]>(this.API_URL + '/AfficherAllContrats');
  }

  addContrat(c: Contrat): Observable<Contrat> {
    return this._http.post<Contrat>(this.API_URL + '/AjouterContrat', c);
  }

  updateContrat(c: Contrat): Observable<Contrat> {
    return this._http.put<Contrat>(this.API_URL + '/ModifierContrat', c);
  }

  deleteContrat(idContrat: number): Observable<Contrat> {
    return this._http.delete<Contrat>(this.API_URL + '/DeleteContrat/' + idContrat);
  }

  getContratById(idContrat: number): Observable<Contrat> {
    return this._http.get<Contrat>(this.API_URL + '/AfficherContrat/' + idContrat);
  }
}

import { Injectable } from '@angular/core';
import {Tipom} from '../interfaces/tipom.interface';
import { Http, Headers} from '@angular/http';
import 'rxjs/Rx'; // para el map

@Injectable()
export class TipomService {


  tiposmSails: string = 'http://35.194.35.240/tipos';
  constructor(private http: Http) { }

  nuevoTipomSails(tipom: Tipom) {
    let body= JSON.stringify(tipom);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.tiposmSails, body , { headers: headers })
      .map(
        res => {
          console.log(res.json());
          return res.json();
        }
      );
  }

  getTipomSails(indice: string) {
    let urls = `${this.tiposmSails}/${ indice}`;
    return this.http.get(urls)
      .map(
        res => {
          return res.json();
        }
      );
  }

  editarTipomSails(tipom: Tipom, id: string) {
    let body= JSON.stringify(tipom);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let url = `${this.tiposmSails}/${id}`;
    return this.http.put(url, body, {headers: headers}).map(
      resultado => {
        return resultado.json;
      }
    );
  }

  eliminarTipomSails(key$: string) {
    let url = `${this.tiposmSails}/${key$}`;
    return this.http.delete(url)
      .map(
        res => {
          return res.json();
        }
      );
  }

  consultarTipomSails() {
    return this.http.get(this.tiposmSails)
      .map(
        res => {
          return res.json();
        }
      );
  }

}

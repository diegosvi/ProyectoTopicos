import { Injectable } from '@angular/core';
import {Categoriap} from '../interfaces/categoriap.interface';
import { Http, Headers} from '@angular/http';
import 'rxjs/Rx'; // para el map

@Injectable()
export class CategoriapService {


  categoriaspSails: string = 'http://35.194.35.240/categorias';
  constructor(private http: Http) { }

  nuevoCategoriapSails(categoriap: Categoriap) {
    let body= JSON.stringify(categoriap);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.categoriaspSails, body , { headers: headers })
      .map(
        res => {
          console.log(res.json());
          return res.json();
        }
      );
  }

  getCategoriapSails(indice: string) {
    let urls = `${this.categoriaspSails}/${ indice}`;
    return this.http.get(urls)
      .map(
        res => {
          return res.json();
        }
      );
  }

  editarCategoriapSails(categoriap: Categoriap, id: string) {
    let body= JSON.stringify(categoriap);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let url = `${this.categoriaspSails}/${id}`;
    return this.http.put(url, body, {headers: headers}).map(
      resultado => {
        return resultado.json;
      }
    );
  }

  eliminarCategoriapSails(key$: string) {
    let url = `${this.categoriaspSails}/${key$}`;
    return this.http.delete(url)
      .map(
        res => {
          return res.json();
        }
      );
  }

  consultarCategoriapSails() {
    return this.http.get(this.categoriaspSails)
      .map(
        res => {
          return res.json();
        }
      );
  }
}

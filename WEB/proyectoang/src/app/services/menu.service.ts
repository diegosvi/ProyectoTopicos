import { Injectable } from '@angular/core';
import {Menu} from '../interfaces/menu.interface';
import { Http, Headers} from '@angular/http';
import 'rxjs/Rx'; // para el map

@Injectable()
export class MenuService {

  menusSails: string = 'http://35.194.35.240/menus';
  //menusSails: string = 'https://dulsini-app-jhoisaac.c9users.io/menu';

  constructor(private http: Http) { }

  nuevoProductoSails(menu: Menu) {
    let body= JSON.stringify(menu);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.menusSails, body , { headers: headers })
      .map(
        res => {
          console.log(res.json());
          return res.json();
        }
      );
  }

  getMenuSails(indice: string) {
    let urls = `${this.menusSails}/${ indice}`;
    return this.http.get(urls)
      .map(
        res => {
          return res.json();
        }
      );
  }

  editarMenuSails(menu: Menu, id: string) {
    let body= JSON.stringify(menu);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let url = `${this.menusSails}/${id}`;
    return this.http.put(url, body, {headers: headers}).map(
      resultado => {
        return resultado.json;
      }
    );
  }

  eliminarMenuSails(key$: string) {
    let url = `${this.menusSails}/${key$}`;
    return this.http.delete(url)
      .map(
        res => {
          return res.json();
        }
      );
  }

  consultarMenuSails() {
    return this.http.get(this.menusSails)
      .map(
        res => {
          return res.json();
        }
      );
  }

}

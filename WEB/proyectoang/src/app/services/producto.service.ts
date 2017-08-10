import { Injectable } from '@angular/core';
import {Producto} from '../interfaces/producto.interface';
import { Http, Headers} from '@angular/http';
import 'rxjs/Rx'; // para el map

@Injectable()
export class ProductoService {

  productosSails: string = 'http://35.194.35.240/productos';
  constructor(private http: Http) { }

    nuevoProductoSails(producto: Producto) {
    let body= JSON.stringify(producto);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.productosSails, body , { headers: headers })
      .map(
        res => {
          console.log(res.json());
          return res.json();
        }
      );
  }

  getProductoSails(indice: string) {
    let urls = `${this.productosSails}/${ indice}`;
    return this.http.get(urls)
      .map(
        res => {
          return res.json();
        }
      );
  }


  editarProductoSails(producto: Producto, id: string) {
    let body= JSON.stringify(producto);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let url = `${this.productosSails}/${id}`;
    return this.http.put(url, body, {headers: headers}).map(
      resultado => {
        return resultado.json;
      }
    );
  }

  eliminarProductoSails(key$: string) {
    let url = `${this.productosSails}/${key$}`;
    return this.http.delete(url)
      .map(
        res => {
          return res.json();
        }
      );
  }

  consultarProductoSails() {
    return this.http.get(this.productosSails)
      .map(
        res => {
          return res.json();
        }
      );
  }
}










//pedido.ts












import { Component, OnInit } from '@angular/core';
import {Producto} from '../../interfaces/producto.interface';
import {ProductoService} from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {

    this.productoService.consultarProductoSails()
      .subscribe(
        resultado => {
          this.productos = resultado;
        }
      );
    // this.productoService.pokedexAPI().subscribe(
    //   res => {
    //     let valor = 1;
    //     for (let id in res.results) {
    //       let pokemonAPIN = res.results[id];
    //       pokemonAPIN.nombre = res.results[id].name;
    //       pokemonAPIN.id = id;
    //       pokemonAPIN.url2 = `${'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'}${valor}${'.png'}`;
    //       this.obtenerHabilidad(res.results[id].url);
    //
    //       this.pokedesAPI.push(pokemonAPIN);
    //       valor++;
    //
    //     }
    //     console.log(res.results[0].name);
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
  }

  ngOnInit() {
  }

  eliminarSails(id: string, posicion: number) {
    this.productoService.eliminarProductoSails(id)
      .subscribe(
        resultado => {
          console.log('se eliminó');
          this.productos.splice(posicion, 1);
        }
      );
  }

}

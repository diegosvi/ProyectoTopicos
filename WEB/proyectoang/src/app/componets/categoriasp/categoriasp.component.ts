import { Component, OnInit } from '@angular/core';
import {Categoriap} from '../../interfaces/categoriap.interface';
import {CategoriapService} from '../../services/categoriap.service';

@Component({
  selector: 'app-categoriasp',
  templateUrl: './categoriasp.component.html',
  styles: []
})
export class CategoriaspComponent implements OnInit {

  categoriasp: Categoriap[] = [];

  constructor(private categoriapService: CategoriapService) {

    this.categoriapService.consultarCategoriapSails()
      .subscribe(
        resultado => {
          this.categoriasp = resultado;
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
    this.categoriapService.eliminarCategoriapSails(id)
      .subscribe(
        resultado => {
          console.log('se eliminó');
          this.categoriasp.splice(posicion, 1);
        }
      );
  }

}

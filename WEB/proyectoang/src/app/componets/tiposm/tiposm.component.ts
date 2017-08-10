import { Component, OnInit } from '@angular/core';
import {Tipom} from '../../interfaces/tipom.interface';
import {TipomService} from '../../services/tipom.service';

@Component({
  selector: 'app-tiposm',
  templateUrl: './tiposm.component.html',
  styles: []
})
export class TiposmComponent implements OnInit {

  tiposm: Tipom[] = [];

  constructor(private tipomService: TipomService) {

    this.tipomService.consultarTipomSails()
      .subscribe(
        resultado => {
          this.tiposm = resultado;
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
    this.tipomService.eliminarTipomSails(id)
      .subscribe(
        resultado => {
          console.log('se eliminó');
          this.tiposm.splice(posicion, 1);
        }
      );
  }

}

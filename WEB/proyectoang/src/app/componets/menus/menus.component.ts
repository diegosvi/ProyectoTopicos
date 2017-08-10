import { Component, OnInit } from '@angular/core';
import {Menu} from '../../interfaces/menu.interface';
import {MenuService} from '../../services/menu.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html'
})
export class MenusComponent implements OnInit {

  menus: Menu[] = [];

  constructor(private menuService: MenuService) {

    this.menuService.consultarMenuSails()
      .subscribe(
        resultado => {
          this.menus = resultado;
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
    this.menuService.eliminarMenuSails(id)
      .subscribe(
        resultado => {
          console.log('se eliminó');
          this.menus.splice(posicion, 1);
        }
      );
  }

}

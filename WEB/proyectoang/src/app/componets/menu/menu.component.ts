import { Component, OnInit } from '@angular/core';
import {Menu} from '../../interfaces/menu.interface';
import {MenuService} from '../../services/menu.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  habilitado: boolean = true;
  id: string;
  menu: Menu = {
    nombre: '',
    descripcion: '',
    precio: 0,
    tipo: '',
    image: 'https://umeepn.files.wordpress.com/2015/11/dulcini.jpg',
  };

  constructor(private menuService: MenuService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      parametros => {
        this.id = parametros['id'];
        if (this.id !== 'nuevo') {
          this.menuService.getMenuSails(this.id).subscribe(
            resultado => {
              this.menu = resultado;
            }
          );
        }
      }
    );
  }

  guardar(forma: any) {
    console.log(this.menu);
    this.habilitado = false;
    if (this.id === 'nuevo') {
      // guardar pokemon nuevo
      this.menuService.nuevoProductoSails(this.menu).subscribe(
        resultado => {
          console.log(resultado);
          this.habilitado = true;
          // this.router.navigate(['/producto', resultado.id]);
        },
        error => {
          console.error(error);
        }
      );
      console.log(this.habilitado);
    }else {
      this.menuService.editarMenuSails(this.menu, this.id).subscribe(
        resultado => {
          this.router.navigate(['/menus' ]);
        }
      );
    }
  }

  ngOnInit() {
  }

}

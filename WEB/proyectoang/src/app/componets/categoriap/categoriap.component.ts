import { Component, OnInit } from '@angular/core';
import {Categoriap} from '../../interfaces/categoriap.interface';
import {CategoriapService} from '../../services/categoriap.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-categoriap',
  templateUrl: './categoriap.component.html',
  styles: []
})
export class CategoriapComponent implements OnInit {


  habilitado: boolean = true;
  id: string;
  categoriap: Categoriap = {
    nombre: '',
  };

  constructor(private categoriapService: CategoriapService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      parametros => {
        this.id = parametros['id'];
        if (this.id !== 'nuevo') {
          this.categoriapService.getCategoriapSails(this.id).subscribe(
            resultado => {
              this.categoriap = resultado;
            }
          );
        }
      }
    );
  }

  guardar(forma: any) {
    console.log(this.categoriap);
    this.habilitado = false;
    if (this.id === 'nuevo') {
      // guardar pokemon nuevo
      this.categoriapService.nuevoCategoriapSails(this.categoriap).subscribe(
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
      this.categoriapService.editarCategoriapSails(this.categoriap, this.id).subscribe(
        resultado => {
          this.router.navigate(['/menus' ]);
        }
      );
    }
  }

  ngOnInit() {
  }

}

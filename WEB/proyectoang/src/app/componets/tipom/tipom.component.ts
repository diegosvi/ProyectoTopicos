import { Component, OnInit } from '@angular/core';
import {Tipom} from '../../interfaces/tipom.interface';
import {TipomService} from '../../services/tipom.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tipom',
  templateUrl: './tipom.component.html',
  styles: []
})
export class TipomComponent implements OnInit {


  habilitado: boolean = true;
  id: string;
  tipom: Tipom = {
    nombre: '',
  };

  constructor(private tipomService: TipomService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      parametros => {
        this.id = parametros['id'];
        if (this.id !== 'nuevo') {
          this.tipomService.getTipomSails(this.id).subscribe(
            resultado => {
              this.tipom = resultado;
            }
          );
        }
      }
    );
  }

  guardar(forma: any) {
    console.log(this.tipom);
    this.habilitado = false;
    if (this.id === 'nuevo') {
      // guardar pokemon nuevo
      this.tipomService.nuevoTipomSails(this.tipom).subscribe(
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
      this.tipomService.editarTipomSails(this.tipom, this.id).subscribe(
        resultado => {
          this.router.navigate(['/menus' ]);
        }
      );
    }
  }

  ngOnInit() {
  }

}

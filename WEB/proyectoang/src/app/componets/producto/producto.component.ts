import { Component, OnInit } from '@angular/core';
import {Producto} from '../../interfaces/producto.interface';
import {ProductoService} from '../../services/producto.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent implements OnInit {
  habilitado: boolean = true;
  id: string;
  producto: Producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    categoria: '',
    image: 'https://umeepn.files.wordpress.com/2015/11/dulcini.jpg',
  };

  constructor(private productoService: ProductoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      parametros => {
        this.id = parametros['id'];
        if (this.id !== 'nuevo') {
          this.productoService.getProductoSails(this.id).subscribe(
            resultado => {
              this.producto = resultado;
            }
          );
        }
      }
    );
  }

  guardar(forma: any) {
    console.log(this.producto);
    //this.habilitado = false;
    if (this.id === 'nuevo') {
      // guardar pokemon nuevo
      this.productoService.nuevoProductoSails(this.producto).subscribe(
        resultado => {
          console.log(resultado);
          //this.habilitado = true;
         // this.router.navigate(['/producto', resultado.id]);
        }
        //error => {
         // console.error(error);
      );
      //console.log(this.habilitado);
    }else {
      this.productoService.editarProductoSails(this.producto, this.id).subscribe(
        resultado => {
          this.router.navigate(['/productos' ]);
        }
      );
    }
  }
  ngOnInit() {
  }

}

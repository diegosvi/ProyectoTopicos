import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private _router:Router) { }

  ngOnInit() {
  }

  buscar(texto: string){
    console.log(texto);
    this._router.navigate(['/buscar', texto]);
  }
}

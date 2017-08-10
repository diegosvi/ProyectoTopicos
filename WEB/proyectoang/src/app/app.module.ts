import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//rutas
import {APP_ROUTING} from './app.routes';

//servicios
import { ProductoService } from './services/producto.service';
import { MenuService } from './services/menu.service';
import { CategoriapService } from './services/categoriap.service';
import { TipomService } from './services/tipom.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { ProductoComponent } from './componets/producto/producto.component';
import { ProductosComponent } from './componets/productos/productos.component';
import { MenuComponent } from './componets/menu/menu.component';
import { MenusComponent } from './componets/menus/menus.component';
import { CategoriapComponent } from './componets/categoriap/categoriap.component';
import { CategoriaspComponent } from './componets/categoriasp/categoriasp.component';
import { TipomComponent } from './componets/tipom/tipom.component';
import { TiposmComponent } from './componets/tiposm/tiposm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    ProductoComponent,
    MenuComponent,
    MenusComponent,
    CategoriapComponent,
    CategoriaspComponent,
    TipomComponent,
    TiposmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    ProductoService,
    MenuService,
    CategoriapService,
    TipomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

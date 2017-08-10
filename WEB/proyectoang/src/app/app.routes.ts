/**
 * Created by Diego Villavicencio on 1/8/2017.
 */
import {RouterModule, Routes} from '@angular/router';
import { ProductosComponent } from './componets/productos/productos.component';
import { ProductoComponent } from './componets/producto/producto.component';
import { MenusComponent } from './componets/menus/menus.component';
import { MenuComponent } from './componets/menu/menu.component';
import { CategoriaspComponent } from './componets/categoriasp/categoriasp.component';
import { CategoriapComponent } from './componets/categoriap/categoriap.component';
import { TiposmComponent } from './componets/tiposm/tiposm.component';
import { TipomComponent } from './componets/tipom/tipom.component';



const  APP_ROUTES: Routes = [

  {path: 'producto/:id', component: ProductoComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'menu/:id', component: MenuComponent},
  {path: 'menus', component: MenusComponent},
  {path: 'categoriap/:id', component: CategoriapComponent},
  {path: 'categoriasp', component: CategoriaspComponent},
  {path: 'tipom/:id', component: TipomComponent},
  {path: 'tiposm', component: TiposmComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'productos'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);



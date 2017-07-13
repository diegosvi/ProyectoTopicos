import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {PromocionesPage} from './promociones';

@NgModule({
  declarations: [
    PromocionesPage,
  ],
  imports: [
    IonicPageModule.forChild(PromocionesPage),
  ],
  exports: [
    PromocionesPage
  ]
})
export class PromocionesPageModule {}

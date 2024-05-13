import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { LoginPageModule } from '../login/login.module';
import { RegistroPageModule } from '../registro/registro.module';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LoginPageModule,
    RegistroPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

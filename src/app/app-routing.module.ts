import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './guard/home.guard';
import { NoHomeGuard } from './guard/no-home.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[HomeGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'editar-alumno',
    loadChildren: () => import('./home/editar-alumno/editar-alumno.module').then( m => m.EditarAlumnoPageModule),
    canActivate:[HomeGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    //canActivate:[NoHomeGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    //canActivate:[NoHomeGuard]
  },
  /*{
    path: '**',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[HomeGuard]
  },*/
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
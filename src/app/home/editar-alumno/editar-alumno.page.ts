import { Component, OnInit } from '@angular/core';

import { EjemploApiService } from '../../services/ejemplo-api.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { NavComponentWithProps, NavController } from '@ionic/angular';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.page.html',
  styleUrls: ['./editar-alumno.page.scss'],
})
export class EditarAlumnoPage implements OnInit {

  data!:string;
  seccion!:string;
  alumno=[];

  constructor(private api: EjemploApiService, private activeroute: ActivatedRoute, private router: Router, private navCtrl:NavController ) 
  {
    this.activeroute.queryParams.subscribe(params =>{
      if (this.router.getCurrentNavigation()?.extras.state)
      {
        this.data = this.router.getCurrentNavigation()!.extras!.state!['data'];
        this.seccion = this.router.getCurrentNavigation()!.extras!.state!['seccion'];
        console.log("Recibido :" + this.data + "y :" + this.seccion)
      }
    });
   }

  ngOnInit() {
      this.getAlumno(this.data);
  }

  getAlumno(data:any){
    console.log("Editar Alumno: Inicio "+ data);
    this.api.getAlumno(this.data, this.seccion).subscribe((res)=>{
    console.log("Editar Alumno: CORRECTO");
    //CAMBIO IMPORTANTE
    this.alumno = res["items"];
    console.log("Editar Alumno: ASIGNACION");
    console.log(res);
    },(error)=>{
      console.log("Editar Alumno: ERROR");
      console.log(error);
    });
    console.log("Editar Alumno: Fin");
  };

  salir(){
    //Funcionalidades sólo para utilizar con guard
    localStorage.setItem('ingresado','false');
    this.navCtrl.navigateRoot('login');
  }

  volver(){
    this.navCtrl.navigateRoot('home');
  }
}

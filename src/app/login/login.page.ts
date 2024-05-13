import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(/*Formulario*/ public fb: FormBuilder, /*Alertas*/ public alertController: AlertController, /*Guard*/public navCtrl:NavController) { 
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
    //this.ingresar();
    if(localStorage.getItem('ingresado'))
    {
      this.navCtrl.navigateRoot('home');
    }
  }

  async ingresar(){
    var f = this.formularioLogin.value;
    //Ojo con la exclamación al final, ya que no puede ser asignado un valor que puede ser vacío.
    var usuario = JSON.parse(localStorage.getItem('usuario')!);

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      //Funcionalidades sólo para utilizar con guard
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('home');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }

}
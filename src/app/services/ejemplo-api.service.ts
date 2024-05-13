import { Injectable } from '@angular/core';

//Importamos las referencias 
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjemploApiService {

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
    })
  }

  //apiURL = 'https://jsonplaceholder.typicode.com';
  apiURL = 'https://g7452e823fa9608-musica.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/';
  
  apiActualizarAlumno = 'https://g7452e823fa9608-musica.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/alumnos003/actualizarAlumno/:id';
  apiEliminarAlumno = 'https://g7452e823fa9608-musica.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/alumnos003/eliminarAlumno/:id';
  apiInsertarAlumno = 'https://g7452e823fa9608-musica.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/alumnos003/insertarAlumno/:id';
  apiObtenerAlumno = 'https://g7452e823fa9608-musica.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/alumnos003/obtenerAlumno/:id';
  apiObtenerAlumnos = 'https://g7452e823fa9608-musica.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/alumnos003/obtenerAlumnos';
  //apiURL = 'https://g7452e823fa9608-musica.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/alumnos009/obtenerAlumnos';

  constructor(private http:HttpClient) { }

  getAlumnos(seccion:string):Observable<any>{
    //return this.http.get(this.apiURL+'/posts/').pipe(retry(3));
    return this.http.get(this.apiURL+ seccion +'/obtenerAlumnos').pipe(retry(3));
  }

  getAlumno(id:string, seccion:string):Observable<any>{
    //return this.http.get(this.apiURL+'/posts/').pipe(retry(3));
    return this.http.get(this.apiURL+ seccion + '/obtenerAlumno/'+id).pipe(retry(3));
  }

  editAlumno(id:string, nombre:string, seccion: string):Observable<any>{
    return this.http.get(this.apiURL+ seccion + '/actualizarAlumno/'+id).pipe(retry(3));
  }
}

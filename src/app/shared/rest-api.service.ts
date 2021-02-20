import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datos } from '../modelo/datos';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  url:string="http://164.90.245.13:8080/registrocivil/rs/usuario/datos?f=";
  
  
  constructor(private http: HttpClient, ) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  getUsuario(cedula:string):Observable<Datos>{
    // let direccion = this.url +"paciente?page="+cedula
    console.log(cedula)
    let direccion=this.url+cedula;
    console.log(direccion)
    
    return this.http.get<Datos>(direccion);
  }
}

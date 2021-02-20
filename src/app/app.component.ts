import { HttpClient } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Datos } from './modelo/datos';
import { RestApiService } from './shared/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conexion3';
  name = new FormControl('');
  cedula='';
  datos:any
  nombre=''
  apellido=''
  telefono=''
  genero=''
  ciudad=''
  educacion=''
 
  encuentra:boolean=false;
  noencuentra:boolean=false;
constructor(private http: HttpClient,
  public restApi: RestApiService,){};
 
  ngOnInit() {
    //this.datos.usuario.nombre=''\
    this.datos=''
  }
  buscar(){
    console.log("llega")
    console.log(this.cedula)
    //this.cedula="nnn"
    this.restApi.getUsuario(this.cedula).subscribe(data =>{
      this.datos=data;

      if(this.datos.codigo==0){
        this.noencuentra=true;
        this.encuentra=false;
      }else{
        this.encuentra=true;
        this.noencuentra=false;
        this.nombre=this.datos.usuario.nombre+" "+this.datos.usuario.apellido
        this.apellido=this.datos.usuario.apellido;
        this.telefono=this.datos.usuario.telefono;
        this.ciudad=this.datos.usuario.ciudad
        this.genero= this.datos.usuario.genero
        this.educacion=this.datos.usuario.educacion
        console.log(this.datos.usuario.nombre)
      }

    });
  }
}


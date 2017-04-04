import { Injectable } from '@angular/core';
import { PersonaDTO } from '../clases/persona-dto';


// Importar objetos de la librería http
import { Http, Response, RequestOptions, Headers } from '@angular/http';
// Importar la clase Observable desde la librería rxjs
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';



const urlBase = 'http://localhost:3000'; // Your base server URL here




@Injectable()
export class ServicioPersonaService {

  constructor(private http: Http) {
  }

  listaPersonas: PersonaDTO[] = [new PersonaDTO({ id: 1, title: 'Hello 1', complete: false }), new PersonaDTO({ id: 2, title: 'Hello 2', complete: false })];

  // Simulate GET /todos
  getAllPersonas(): PersonaDTO[] {
    return this.listaPersonas;
  }

  leerDatos(): Observable<Response> {
    // Se declara cómo va a ser la llamada 
    // ocultando los pormenores a los consumidores   
    return this.http
      .get(`${urlBase}/recurso`);
    // En este momento aún no se efectuó la llamada
  }

}


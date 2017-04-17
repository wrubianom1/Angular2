import { Injectable } from '@angular/core';
import { PersonaDTO } from '../clases/persona-dto';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ServicioPersonaService {

  constructor(private http: Http) {
  }
  private commentsUrl = 'http://localhost:8080/InventarioRestApi/apis/Materia/';
  //private commentsUrl = 'https://jsonplaceholder.typicode.com/posts/';


  listaPersonas: PersonaDTO[] = [new PersonaDTO({ idPersona: 1321654, celular: '311655', nombrePersona: 'William' }), new PersonaDTO({ idPersona: 2, celular: '222', nombrePersona: 'Eduardo' })];

  // Simulate GET /todos
  //getAllPersonas(): Promise<PersonaDTO[]> {
  getAllPersonas(): PersonaDTO[] {
    /* return this.http.get(urlBase)
       .toPromise()
       .then(response => response.json().data as PersonaDTO[])
       .catch(this.handleError);*/

    //return Promise.all(this.listaPersonas);
    return this.listaPersonas;
  }



  getComments(): Promise<PersonaDTO[]> {

    return this.http.get(this.commentsUrl)
      .toPromise()
      .then(response => response.json().data as PersonaDTO[])
      .catch(this.handleError);
    /*
        return this.http.get(this.commentsUrl)
          .map(res => res.json());*/
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}


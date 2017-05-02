import { Injectable } from '@angular/core';
import { PersonaDTO } from '../clases/persona-dto';
import { ProductDTO } from '../clases/product-dto';
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

  private urlProducto = 'http://localhost:8080/rest/productos';

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


  getProductos(): Observable<ProductDTO[]> {

    // ...using get request
    return this.http.get(this.urlProducto)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getProductosPromesa(): Promise<ProductDTO[]> {

    // ...using get request
    return this.http.get(this.urlProducto)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);

  }


  getComments(): Promise<ProductDTO[]> {

    return this.http.get(this.urlProducto)
      .toPromise()
      .then(response => response.json().data)
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


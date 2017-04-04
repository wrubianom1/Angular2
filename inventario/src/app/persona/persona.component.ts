import { Component, OnInit } from '@angular/core';

import { ServicioPersonaService } from './servicio-persona.service';

import { PersonaDTO } from '../clases/persona-dto';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [ServicioPersonaService]
})
export class PersonaComponent implements OnInit {

  titulo = 'hola mundo';

  items: PersonaDTO[];


  constructor(private personaService: ServicioPersonaService) {
    this.items = personaService.getAllPersonas();
  }

  ngOnInit() {

  }


}

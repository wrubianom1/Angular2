import { TestBed, inject } from '@angular/core/testing';
import { ServicioPersonaService } from './servicio-persona.service';
import { PersonaDTO } from '../clases/persona-dto';

describe('ServicioPersonaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioPersonaService]
    });
  });

  it('should ...', inject([ServicioPersonaService], (service: ServicioPersonaService) => {
    expect(service).toBeTruthy();
  }));

});

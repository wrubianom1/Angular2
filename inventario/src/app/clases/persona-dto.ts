export class PersonaDTO {

    idPersona: number;
    celular: string = '';
    nombrePersona: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}

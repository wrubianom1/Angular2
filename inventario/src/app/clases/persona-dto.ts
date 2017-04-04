export class PersonaDTO {

    id: number;
    title: string = '';
    complete: boolean = false;
    apellido: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}

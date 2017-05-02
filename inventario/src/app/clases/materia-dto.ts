export class ProductDTO {

    id: number;
    version: number;
    productId: String = "";
    description: String = "";
    imageUrl: String = "";
    price: number;
   

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}

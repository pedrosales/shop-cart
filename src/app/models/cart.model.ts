import { ProductModel } from './product.model';

// export class CartModel {
//     public products: ProductModel[] = [];
//     public total: number = 0;
// }

export class CartModel {
    /**
     *
     */
    constructor(
        public products: ProductModel[] = [],
        public total: number = 0
    ) {

    }
}
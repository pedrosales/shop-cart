import { ActionTypes } from '../actions/cart.action';
import { ActionModel } from '../models/action.model';
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';

export const cart = new CartModel();

export function cartReducer(
    state = cart,
    action: ActionModel
) {
    switch (action.type) {
        case ActionTypes.Add:
            {
                //console.log(state);
                // console.log(action.payload);
                // state.products.push(action.payload);
                // state.total = calculateTotal(state.products);

                // console.log(state);
                // return state;

                let estado = {
                    ...state,
                    products: [
                        ...state.products,
                        action.payload
                    ]
                };
                console.log(estado);
                return {
                    ...state,
                    products: [
                        ...state.products,
                        action.payload
                    ],
                    total: calculateTotal(estado.products)
                };
            };

        case ActionTypes.Remove:
            {
                const index = state.products.indexOf(action.payload);
                state.products.splice(index, 1);
                state.total = calculateTotal(state.products);

                console.log(state);
                return state;
            };

        case ActionTypes.Clear:
            {
                state = new CartModel();
                state.total = 0;

                console.log(state);
                return state;
            };

        default:
            return state;
    }
}

function calculateTotal(products: ProductModel[]): number {
    let total: number = 0;
    products.forEach(product => {
        total += product.price;
    });
    console.log(total);
    return total;
}
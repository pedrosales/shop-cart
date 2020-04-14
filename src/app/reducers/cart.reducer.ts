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

                state = {
                    ...state,
                    products: [
                        ...state.products,
                        action.payload
                    ]
                };
                console.log(state);
                return {
                    ...state,
                    total: calculateTotal(state.products)
                };
            };

        case ActionTypes.Remove:
            {
                const index = state.products.indexOf(action.payload);
                // state.products.splice(index, 1);
                // state.total = calculateTotal(state.products);
                // let newState = [...state.products];
                // state.products = newState.splice(index, 1);
                // state.total = calculateTotal(state.products);
                // state = {
                //     ...state,
                //     products: [
                //         ...state.products.filter((item) => item._id != action.payload._id)
                //     ]
                // }

                // console.log(state);

                let products = state.products.slice();
                products.splice(index, 1);
                return state = {
                    ...state,
                    products: products,
                    total: calculateTotal(products)
                }
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
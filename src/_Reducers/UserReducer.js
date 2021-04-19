import {
    ADD_TO_CART,
    GET_CART_ITEMS,
    REMOVE_CART_ITEM,
    ALARM_SETTING
} from '../_Actions/Types';


export default function (state = {}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    cart: action.payload
                }
            }
        case GET_CART_ITEMS:
            return { ...state, cartDetail: action.payload }



        case REMOVE_CART_ITEM:
            return {
                ...state, cartDetail: action.payload.productInfo,
                userData: {
                    ...state.userData,
                    cart: action.payload.cart
                }
            }
        default:
            return state;
    }
}


// const initialState = {
//     products: []
//   };


// export const cart = (state = initialState, action) => {
//     switch (action.type) {
//       case ADD_TO_CART:
//         if (state.products.find(p => p.id === action.product.id)) {
//           return state;
//         }
  
//         return {
//           ...state,
//           products: state.products.concat(action.product)
//         };
//       case REMOVE_CART_ITEM:
//         if (state.products.find(p => p.id === action.product.id)) {
//           return {
//             ...state,
//             products: state.products.filter(p => p.id !== action.product.id)
//           };
//         }
  
//         return state
//       default:
//         return state;
//     }
//   };
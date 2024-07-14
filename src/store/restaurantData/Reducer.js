import {FETCH_RESTAURANT_DATA, FETCH_RESTAURANT_DATA_SUCCESS, FETCH_RESTAURANT_DATA_FAILED} from "../type/Type";

const initialState = {
    RestaurantData: [],
    loading: false,
    error: null,
};

const restaurantReducer = (state = initialState, action) =>{
    // console.log("state",state);
    // console.log("actions",action);
    switch(action.type){
        case FETCH_RESTAURANT_DATA:
            return{
                ...state,
                loading:true,
                error: null
            };
        case FETCH_RESTAURANT_DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                RestaurantData: action.payload,
                error: null,
            }
        case FETCH_RESTAURANT_DATA_FAILED:
            return{
                ...state,
                loading:false,
                RestaurantData: action.payload,
                // RestaurantData:[]
            };
            default:
            return state;
    }
}
export default restaurantReducer;
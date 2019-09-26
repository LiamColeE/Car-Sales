import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/actions";

const initialState = {
        additionalPrice: 0,
        car: {
            price: 26395,
            name: '2019 Ford Mustang',
            image:
                'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
            features: []
        },
        store: [
            { id: 1, name: 'V-6 engine', price: 1500 },
            { id: 2, name: 'Racing detail package', price: 1500 },
            { id: 3, name: 'Premium sound system', price: 500 },
            { id: 4, name: 'Rear spoiler', price: 250 }
        ]
    };

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FEATURE:
            let addedFeature = state.car.features;
            addedFeature.push(action.payload)
            let additionalPrice = 0;
            addedFeature.forEach((item) => {additionalPrice += item.price});
            return{
                ...state,
                additionalPrice,
                car:{
                    price: state.car.price,
                    name: state.car.name,
                    image: state.car.image,
                    features: addedFeature
                }
            }
        case REMOVE_FEATURE:
            let removeFeature = state.car.features;
            removeFeature = removeFeature.filter(obj => obj.id != action.payload.id)
            return{
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car:{
                    price: state.car.price,
                    name: state.car.name,
                    image: state.car.image,
                    features: removeFeature
                }
            }
        default:
            return state;
    }
}

export default reducer;
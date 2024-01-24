// import redux from 'redux'; // if we use react es6 declaration

const redux = require('redux'); // for nodejs
const createStore = redux.createStore;

// actions
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

// action creator -> a function that returns/creates an action
function orderCake(numOfCakesOrdered = 1) {
    return {
        type: CAKE_ORDERED,
        quantity: numOfCakesOrdered
    };
}

function restockCake(numOfNewCakes = 1) {
    return {
        type: CAKE_RESTOCKED,
        quantity: numOfNewCakes
    };
}

// initial state of store
const initialState = {
    anotherProperty: '',
    numOfCakes: 10
}

// (previousState, action) => newState
const reducer = (state = initialState, action) => {
    try {
        switch(action.type) {
            case 'CAKE_ORDERED':
                if (action.quantity <= state.numOfCakes) {
                    const response = {
                        ...state, // to make copy of initial state to not wanna change other properties
                        numOfCakes: state.numOfCakes - action.quantity
                    };
                    return response;
                } else {
                    return state;
                    // show some pop up like cakes not available
                    // throw new Error('Cakes not available');
                }
                case 'CAKE_RESTOCKED':
                    const response = {
                        ...state,
                        numOfCakes: state.numOfCakes + action.quantity
                    };
                    return response;
            default:
                return state;
        }
    } catch(e) {
        console.log('Error', e.toString());
    }
}

// create a store
const store = createStore(reducer);
console.log('Initial State', store.getState());

// subscribe to store
// subscribe fn return a method to use it for unsubscribing
const unsubscribe = store.subscribe(()=>{
    // callback function for after state updation handling
    console.log('Updated State', store.getState()); // to get state
})

// dispatch an action
store.dispatch(orderCake(1));
store.dispatch(orderCake(1));
store.dispatch(restockCake(5));
// store.dispatch(orderCake(10)); // error scenario


// unsubscribe
unsubscribe();
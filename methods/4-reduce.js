const initialState = {
    coins: 0,
    health: 100
};

const actionsArray = [
    { type: 'ADD_COINS', payload: 20 },
    { type: 'SUBTRACT_HEALTH', payload: 5 }
];

const marioReducer = (state, action) => {
    console.log(action);
    return state;
}

const currentState = actionsArray.reduce(marioReducer, initialState);
console.log(currentState);

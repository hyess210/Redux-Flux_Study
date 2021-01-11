import * as types from './ActionTypes';

export function increment() {
    return {
        type: types.INCREAMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}

export function set_color() {
    return {
        type: types.SET_COLOR
    };
}
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"


const defaultInfo = {
    name: "Name",
    surname: "Surname",
    city: "City",
    country: "Country",
    job: "Job",
    extraInfo: "Here is my CV",
    isLogged: false,
}

export const userReducer = (state = defaultInfo, action) => {
    switch (action.type) {
        case "LOGIN_TRUE":
            return { ...state, isLogged: true }
        case "SET_DATA":
            return { ...state, info: action.info }
        default:
            return state
    }
}

export const store = createStore(userReducer, applyMiddleware(thunk))


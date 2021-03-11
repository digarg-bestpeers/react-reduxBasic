// For one Reducer
// import { createStore } from 'redux'
// import cakeReducer from "./cake/cakeReducer"

// const store = createStore(cakeReducer)

// export default store;



// For more than one Reducer
import { createStore, applyMiddleware } from 'redux'
import rootReducer from "./rootReducer"
import logger from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store;
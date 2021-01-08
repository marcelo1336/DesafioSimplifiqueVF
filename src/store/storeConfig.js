import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

import messageReducer from './reducers/message'
import userReducer from './reducers/user'
import manifestationReducer from './reducers/manisfestation'

const reducers = combineReducers({
    user: userReducer,
    manifestations: manifestationReducer,
    message: messageReducer
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig
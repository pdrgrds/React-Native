import { createStore , combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import tareas from './reducer';

const rootReducer = combineReducers({
    form : formReducer,
    tareas
})
const store = createStore(rootReducer) 
export default store
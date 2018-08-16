import {combineReducers} from 'redux';
import LibraryReducer from './src/LibraryReducer.js';

export default combineReducers({
    libraries: LibraryReducer
})
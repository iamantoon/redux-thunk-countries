import {combineReducers} from 'redux';
import {themeReducer} from './../store/theme/themeReducer';
import {countriesReducer} from './../store/countries/countriesReducer';
import {controlsReducer} from './../store/controls/controlsReducer';
import {detailsReducer} from './details/detailsReducer';

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducer,
    controls: controlsReducer,
    details: detailsReducer
})
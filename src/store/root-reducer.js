import {combineReducers} from "redux";
import  {themeReducers} from "./theme/theme-reducers";
import {countriesReducer} from "./countries/countries-reducers";
import {controlsReducer} from "./controls/controls-reducer";
import {detailsReducer} from "./detailes/details-reducer";

export const rootReducer = combineReducers({
    theme: themeReducers,
    countries: countriesReducer,
    controls: controlsReducer,
    details: detailsReducer,
    });

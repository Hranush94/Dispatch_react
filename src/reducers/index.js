import { combineReducers } from 'redux';
import DriversReducer from './reducer_drivers';
import ActiveMarker from './reducer_active_marker';
import MarkersReducer from './reducer_markers';
const rootReducer = combineReducers({
  drivers: DriversReducer,
  activeMarker:ActiveMarker,
  markers:MarkersReducer,
});

export default rootReducer;


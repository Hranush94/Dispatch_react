import React from 'react';
import {Marker} from 'react-google-maps';
import axios from 'axios';
export function onMarkerCLick(driver) {
  /// ay stex vor request uxarkes es idn petqa galu vor koknkret driverine stanas,
  // const ROOT_URL=``;
  // const url=`${ROOT_URL}`;
  // const request=axios.get(url);
 const markers=[];
  driver.locations.map((location,index)=>{
    markers.push({ id:index, lat:location.lat, lng: location.lng,driverId:driver.id});
    
    }
  )

  return {
    type: 'MarkerClicked',
    payload: markers,
// payload:request,

  }
}
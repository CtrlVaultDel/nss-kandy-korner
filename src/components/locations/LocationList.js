import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider.js";
import { LocationCard } from "./LocationCard.js";
import "./Location.css";

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext);

  //useEffect - reach out to the world for something
  useEffect(getLocations, []);

  return (
    <>
      <h2 className="locationsHeader">Locations</h2>
      <div className="locations">
        {
          //   key is used to give an independant value to each card for React to keep track
          locations.map(location => <LocationCard key={location.id} location={location} />)
        }
      </div>
    </>
  );
};
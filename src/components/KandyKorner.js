import React from "react";
import { LocationProvider } from "./locations/LocationProvider.js";
import { LocationList } from "./locations/LocationList.js";

export const KandyKorner = () => (
  <>
    <h1>Kandy Korner Home Page</h1>
    <LocationProvider>
        <LocationList />
    </LocationProvider>
  </>
);
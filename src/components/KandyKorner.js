import React from "react";
import { LocationList } from "./locations/LocationList.js";
import { LocationProvider } from "./locations/LocationProvider.js";

export const KandyKorner = () => (
  <>
    <h1>Kandy Korner Home Page</h1>
    <LocationProvider>
        <LocationList />
    </LocationProvider>
  </>
);
import { CustomMap } from "./CustomMap";
import { User } from "./User";
// import { Company } from "./Company";
// import {} from "google.maps";
/**
/// <reference types="@types/google.maps" />
 */

const user = new User();

const customMap = new CustomMap("map");

customMap.addUserMarker(user);

// window.google.maps.places.ParkingOptions

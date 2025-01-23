import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

async function app() {
  const customMap = new CustomMap("map");
  await customMap.initMap();
  const user = new User();
  await customMap.addMarker(user);
  const company = new Company();
  await customMap.addMarker(company);
}

app();
// window.google.maps.places.ParkingOptions

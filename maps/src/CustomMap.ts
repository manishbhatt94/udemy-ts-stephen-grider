import { Company } from "./Company";
import { User } from "./User";

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addUserMarker(user: User) {
    new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position: user.location,
    });
  }

  addCompanyMarker(company: Company) {}
}

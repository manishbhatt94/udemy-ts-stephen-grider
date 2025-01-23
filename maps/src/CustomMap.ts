interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;
  private mapElementId: string;

  constructor(divId: string) {
    this.mapElementId = divId;
  }

  async initMap() {
    const { Map } = (await google.maps.importLibrary(
      "maps"
    )) as google.maps.MapsLibrary;
    this.googleMap = new Map(document.getElementById(this.mapElementId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
      mapId: "DEMO_MAP_ID",
    });
  }

  async addMarker(mappable: Mappable) {
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      "marker"
    )) as google.maps.MarkerLibrary;

    new AdvancedMarkerElement({
      map: this.googleMap,
      position: mappable.location,
    });
  }
}

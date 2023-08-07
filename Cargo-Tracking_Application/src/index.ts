import { Destination } from "./Destination";
import { Cargo } from "./Cargo";
import { TrackingMap } from "./TrackingMap";

const destination = new Destination();
console.log("destination", destination);

const cargo = new Cargo();
console.log("cargo", cargo);

const trackingMap = new TrackingMap('g-map');

trackingMap.attachMarker(destination);
trackingMap.attachMarker(cargo);

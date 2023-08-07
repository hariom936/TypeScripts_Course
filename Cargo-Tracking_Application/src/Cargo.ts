import {Faker, es}  from '@faker-js/faker';
import { Entity } from './TrackingMap';
const customFaker = new Faker({ locale: [es] });

export class Cargo implements Entity {
  trackingId: string;
  location: {
    lat: number;
    lon: number;
  };
  weight: number;

  constructor() {
    this.trackingId = customFaker.string.uuid();
    this.location = {
      lat: customFaker.location.longitude(),
      lon: customFaker.location.longitude()
    }
  }

  popupText(): string {
    return `<h3>Cargo Name: ${this.trackingId}</h3>`;
  }

}

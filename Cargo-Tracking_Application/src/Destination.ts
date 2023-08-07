import { Faker, es } from '@faker-js/faker';
import { Entity } from './TrackingMap';
const customFaker = new Faker({ locale: [es] });

export default 7;

export class Destination implements Entity {
  receiver: string;
  location: {
    lat: number;
    lon: number;
  };
  weight: number;

  constructor() {
    this.receiver = customFaker.person.firstName();
    this.location = {
      lat: customFaker.location.longitude(),
      lon: customFaker.location.longitude()
    }
  }

  popupText(): string {
    return `<h3>Reveiver Name: ${this.receiver}</h3>`;
  }

}

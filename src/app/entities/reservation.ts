import { Client } from './client';
import { Restaurant } from './restaurant';
import { Tables } from './table';

export type Reservations = Reservation[];

export interface Reservation {
  id: number;
  etat: string;
  date: string;
  heure: string;
  nbrPlace: number;
  restaurant: Restaurant;
  client: Client | null;
  tables: Tables | null;
}

import { Restaurant } from './restaurant';
export type Tables = Table[];

export interface Table {
  id: number;
  numero: number;
  nombrePlace: number;
  etat: string;
  restaurant?: Restaurant;
}

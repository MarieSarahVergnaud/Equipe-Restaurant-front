import { Plats } from "./plat";
import { Tables } from "./table";

export type Commandes = Commande[]

export interface Commande {
  id: number
  numero: number
  table: Tables
  etat: string
  plats: Plats
}
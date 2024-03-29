export type Plats = Plat[]

export interface Plat {
  id: number
  nom: string
  prix: number
  description: string
  categorie: string
  image_plat_url: string
}

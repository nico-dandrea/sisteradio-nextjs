// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type BusinessEntity = {
  _id: string
  fullname: string
  dni_cuil: string
  address: string
  latlng: [lat:number,lng:number]
  phone: string
  email: string
}
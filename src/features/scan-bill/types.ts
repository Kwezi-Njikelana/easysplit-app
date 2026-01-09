 export interface Person {
  id: number;
  name: string;
  color: string;
}

 export interface Item {
  id: number;
  name: string;
  price: string;
  sharedBy: number[];
}

 export interface PersonTotal extends Person {
  subtotal: number;
  tax: number;
  tip: number;
  total: number;
}

 export interface Calculation {
  subtotal: number;
  tax: number;
  tip: number;
  total: number;
  personTotals: PersonTotal[];
}
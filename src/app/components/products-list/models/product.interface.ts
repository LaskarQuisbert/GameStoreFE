export interface Product { 
    id: number;
    name: string;
    description: string | null;
    ageRestriction: string | null;
    company: string;
    price: string;
}
export type Store = {
  id: string;
  name: string;
  type: string;
  address: string;
  city: string;
  phone: string;
  lat: number;
  lng: number;
};

export const stores: Store[] = [
  {
    id: "s1",
    name: "The Daily Dram",
    type: "BOTTLE SHOP",
    address: "14 Linking Road, Bandra West",
    city: "Mumbai",
    phone: "+91 98765 43210",
    lat: 19.062,
    lng: 72.835
  },
  {
    id: "s2",
    name: "High Spirits",
    type: "BAR / RESTAURANT",
    address: "Koregaon Park, Lane 6",
    city: "Pune",
    phone: "+91 98765 43211",
    lat: 18.536,
    lng: 73.893
  },
  {
    id: "s3",
    name: "The Tipsy Turtle",
    type: "BAR / RESTAURANT",
    address: "Vagator Beach Road",
    city: "Goa",
    phone: "+91 98765 43212",
    lat: 15.601,
    lng: 73.738
  },
  {
    id: "s4",
    name: "Liquid Assets",
    type: "BOTTLE SHOP",
    address: "Indiranagar 100ft Road",
    city: "Bangalore",
    phone: "+91 98765 43213",
    lat: 12.978,
    lng: 77.640
  },
  {
    id: "s5",
    name: "The Library Bar",
    type: "HOTEL",
    address: "Diplomatic Enclave, Chanakyapuri",
    city: "Delhi",
    phone: "+91 98765 43214",
    lat: 28.596,
    lng: 77.189
  },
  {
    id: "s6",
    name: "Barrel & Co.",
    type: "BAR / RESTAURANT",
    address: "Jubilee Hills, Road No 36",
    city: "Hyderabad",
    phone: "+91 98765 43215",
    lat: 17.432,
    lng: 78.407
  },
  {
    id: "s7",
    name: "Vintage Wines & Spirits",
    type: "BOTTLE SHOP",
    address: "Nungambakkam High Road",
    city: "Chennai",
    phone: "+91 98765 43216",
    lat: 13.060,
    lng: 80.249
  },
  {
    id: "s8",
    name: "The Royal Pour",
    type: "HOTEL",
    address: "C-Scheme, Ashok Marg",
    city: "Jaipur",
    phone: "+91 98765 43217",
    lat: 26.912,
    lng: 75.787
  }
];

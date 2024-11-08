// src/types/PostData.ts
export interface PostData {
    position: string;
    devName: string;
  }

// src/types/UserData.ts
export interface Geo {
    lat: string;
    lng: string;
  }
  
  export interface Address {
    street: string;
    suite: string;
    geo: Geo;
  }
  
  export interface User {
    id: number;
    name: string;
    address: Address;
  }
  
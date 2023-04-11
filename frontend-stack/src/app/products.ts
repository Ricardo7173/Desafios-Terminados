export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    images: ["PhoneXI.jpg"],
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    images: ["PhoneMini.jpg"],
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'Provides call control and private branch exchange (PBX) capabilities',
    images: ["PhoneStandar.jpg"],
  },
  {
    id: 4,
    name: 'Phone Power G',
    price: 525,
    description: 'Will allow you to get the most out of your phone without having to recharge it',
    images: ["PhonePowerG.jpg"],
  },
  {
    id: 5,
    name: 'Phone Samsung',
    price: 299,
    description: 'Optical fingerprint reader under the screen',
    images: ["PhoneSamsung.jpg"],
  },
  {
    id: 6,
    name: 'Phone huawei',
    price: 299,
    description: 'Technical characteristics with a 4000 mAh battery, fingerprint reader',
    images: ["PhoneHuawei.jpg"],
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
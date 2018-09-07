import { Injectable } from "@angular/core";

@Injectable()
export class UserServices {
  categroies = ['news', 'entertainment', 'music', 'art', 'food', 'sports', 'gaming' ];
  limits = [5, 10, 15, 20, 2];
  defaultCategory= 'gaming';
  defaultLimit= 10;
  constructor() {
  }
  
}

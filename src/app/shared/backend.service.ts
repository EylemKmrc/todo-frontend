import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendService {

  apiURL = 'http://localhost:3000'

  constructor() { }

  //Get alle Categorien
  async getCategories( ): Promise<string[]> {
    let response = await fetch(this.apiURL + '/categories');
    let categories = await response.json();
    console.log('categories in service (getCategories): ', categories);
    return categories;
  }


}

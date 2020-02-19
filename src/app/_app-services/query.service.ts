import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor() { }

  makeSenseOfQueryParams() {
    return {};
  }

  init() {
    this.makeSenseOfQueryParams();
  }
}

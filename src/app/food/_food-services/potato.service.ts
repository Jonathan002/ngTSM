import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PotatoService {

  readonly isPotato = true;

  constructor() { }
}

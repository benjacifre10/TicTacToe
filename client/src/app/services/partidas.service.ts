import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Partida } from '../models/Partida.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartidasService {
  API_URI = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) { }

  getGames() {
    return this.http.get(`${this.API_URI}/tictactoe`);
  }
}

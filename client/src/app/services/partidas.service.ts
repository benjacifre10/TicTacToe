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

  getPartidas() {
    return this.http.get(`${this.API_URI}/tictactoe`);
  }

  getPartida(id: string) {
    return this.http.get(`${this.API_URI}/tictactoe/${id}`);
  }

  savePartida(partida: Partida) {
    return this.http.post(`${this.API_URI}/tictactoe`, partida);
  }

  updatePartida(id: string | number, updatedPartida: Partida): Observable<Partida> {
    return this.http.put<Partida>(`${this.API_URI}/tictactoe/${id}`, updatedPartida);
  }
}

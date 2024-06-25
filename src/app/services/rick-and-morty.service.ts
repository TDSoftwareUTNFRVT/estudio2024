import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(
    private http: HttpClient
  ) { }

  obtenerPersonajes(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  irAPagina(page: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${page}`);
  }

}

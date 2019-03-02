/**
 * Import Angular libraries.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  /**
   * Globally declared variables for the API service.
   */
  private baseUrl = 'https://anti-corruption.herokuapp.com';

  /**
   * Creates API Service object instance.
   * @param http - Angular http client object instance.
   */
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Retrieves list of IUB procurements.
   */
  getProcurements(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.baseUrl}/data`);
  }
}

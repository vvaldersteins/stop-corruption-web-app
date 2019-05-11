/**
 * Import Angular libraries.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  /**
   * Globally declared variables for the API service.
   */
  private baseUrl = environment.baseUrl;

  /**
   * Creates API Service object instance.
   * @param http - Angular http client object instance.
   */
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Retrieves list of IUB procurements.
   * @param limit - Limit how much rows to retrieve.
   * @param filters - Object with filters.
   * @param sorters - Object with sort information.
   */
  getProcurements(limit: number, filters: any, sorters: any): Observable<HttpResponse<any>> {
    // Setup parameters
    const params = new HttpParams().set('limit', limit.toString()).set('filters', JSON.stringify(filters))
      .set('sorters', JSON.stringify(sorters));

    return this.http.get<any>(`${this.baseUrl}/data`, { params });
  }
}

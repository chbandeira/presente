import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const url = environment.api + '/responsaveis';

@Injectable({
  providedIn: 'root'
})
export class ResponsaveisService {

  constructor(private http: HttpClient) { }

  searchByTerm(term: string) {
    if (term === '') {
      return of([]);
    }

    const httpParams = new HttpParams().set('term', term);
    return this.http.get<any>(url + '/search', {
      params: httpParams
    }).pipe(
      map(x => x['content'])
    );
  }
}

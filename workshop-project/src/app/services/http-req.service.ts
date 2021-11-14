import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Person } from '../data/model/person';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpReqService {

  constructor(private http: HttpClient) { }

  endpoint='api/people';

  headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('accept', 'application/json');

  httpOptions = {
    // To get full response and access to special headers or status codes returned by server, use observe option.
    // observe: 'response',
    headers: this.headers,
  };

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.endpoint, this.httpOptions)
    .pipe(
      //retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    );
  }

  getOne(id:number): Observable<Person> {
    return this.http.get<Person>(`${this.endpoint}/${id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  create(person:Person): Observable<Person>{
    return this.http.post<Person>(this.endpoint, person, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
  delete(id:number) {
    return this.http.delete(`${this.endpoint}/${id}`, this.httpOptions);
  }

  update(person:Person): Observable<Person>{
    return this.http.put<Person>(`${this.endpoint}/${person.id}`, person, this.httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IWorker } from '../model/iworker';

@Injectable({
  providedIn: 'root'
})
export class RequestExampleService {

  constructor(private http: HttpClient) { }

  endpoint = `${environment.baseUrl}/workers`;

  headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('accept', 'application/json');

  httpOptions = {
    // To get full response and access to special headers or status codes returned by server, use observe option.
    // observe: 'response',
    headers: this.headers,
  };

  // GET all entities from server
  getAll(): Observable<IWorker[]> {
    return this.http.get<IWorker[]>(this.endpoint, this.httpOptions)
      .pipe(
        //retry(3), // retry a failed request up to 3 times
        catchError(this.handleError)
      );
  }

  // GET one entity by ID
  getOne(id: number): Observable<IWorker> {
    return this.http.get<IWorker>(`${this.endpoint}/${id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /** POST: add a new worker to the database */
  add(worker: IWorker): Observable<IWorker> {
    return this.http.post<IWorker>(this.endpoint, worker, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /** PUT: update worker from the database */
  update(worker: IWorker): Observable<IWorker> {
    return this.http.put<IWorker>(`${this.endpoint}/${worker.id}`, worker, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // GET one entity by ID
  delete(id: number): Observable<IWorker> {
    return this.http.delete<IWorker>(`${this.endpoint}/${id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    //client-side errors have status set to 0
    // You can also check specific status with: error && error.status === 401
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      // The error property contains a ProgressEvent object, whose type might provide further information.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }



}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { News } from '../models/news';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VllazniaService {

  //apiUrl = 'http://api.albaniasoccer.com/';
  apiNews = 'https://www.fkvllaznia.net/main/app/';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getHomeNews (): Observable<News[]> {
    return this.http.get<News[]>(this.apiNews + 'lajme.php?nr=3')
      .pipe(
        //tap(_ => this.log('fetched news')),
        catchError(this.handleError('getHomeNews', []))
      );
  }

  getAllNews (): Observable<News[]> {
    return this.http.get<News[]>(this.apiNews + 'lajme.php')
      .pipe(
        //tap(_ => this.log('fetched news')),
        catchError(this.handleError('getHomeNews', []))
      );
  }

  getInfoNews (newsId : number): Observable<News[]> {
    return this.http.get<News[]>(this.apiNews + 'lajme.php?id=' + newsId)
      .pipe(
        //tap(_ => this.log('fetched news')),
        catchError(this.handleError('getHomeNews', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}

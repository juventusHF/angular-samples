import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {JokeResponse} from '../../models/Joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getJoke(): Observable<JokeResponse> {
    return this.http.get<JokeResponse>('http://api.icndb.com/jokes/random');
  }

}

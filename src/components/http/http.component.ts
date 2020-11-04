import { Component, OnInit } from '@angular/core';
import {JokeResponse} from '../../models/Joke';
import {JokeService} from '../../services/joke/joke.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private jokeService: JokeService) { }

  jokeResponse: JokeResponse;

  ngOnInit(): void {
  }

  loadJoke(): void {
    this.jokeService.getJoke()
      .subscribe((data: JokeResponse) => this.jokeResponse = { ...data });
  }

}

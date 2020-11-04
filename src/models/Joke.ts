export interface JokeResponse {
  type: string;
  value: Joke;
}

export interface Joke {
  id: number;
  joke: string;
  categories: Array<string>;
}

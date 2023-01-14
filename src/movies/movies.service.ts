import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Array<Movie> = [];

  getAll(): Array<Movie> {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.filter((movie) => movie.id === parseInt(id))[0];
  }

  deleteOne(id: string): boolean {
    this.movies = this.movies.filter((movie) => movie.id !== parseInt(id));
    return true;
  }

  create(movieData: Omit<Movie, 'id'>): boolean {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });

    return true;
  }
}

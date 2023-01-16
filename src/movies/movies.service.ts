import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Array<Movie> = [];

  getAll(): Array<Movie> {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === parseInt(id));
    if (!movie) {
      throw new NotFoundException('Movie not found');
    }

    return movie;
  }

  deleteOne(id: string): boolean {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== parseInt(id));
    return true;
  }

  create(movieData: CreateMovieDto): boolean {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });

    return true;
  }

  update(id: string, updateData: Omit<Movie, 'id'>) {}
}

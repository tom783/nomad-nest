import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll() {
    return this.movieService.getAll();
  }

  @Get('/search')
  search(@Query('query') query: string) {
    return `This will search for movies with query: ${query}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.movieService.getOne(id);
  }

  @Post()
  create(@Body() data: CreateMovieDto) {
    return this.movieService.create(data);
  }

  @Delete('/:id')
  remove(@Param('id') id: string): boolean {
    return this.movieService.deleteOne(id);
  }

  @Patch('/:id')
  patch(@Param('id') id: string, @Body() body: any) {
    return this.movieService.update(id, body);
  }
}

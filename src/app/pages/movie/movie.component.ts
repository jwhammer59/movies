import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMAGE_SIZES } from 'src/app/constants/image-sizes';
import {
  Movie,
  MovieCredits,
  MovieImages,
  MovieVideo,
  SimilarMovies,
} from 'src/app/models/Movie';
import { MoviesService } from 'src/app/services/movies.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  similarMovies: SimilarMovies | null = null;
  imageSizes = IMAGE_SIZES;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getSimilarMovies(id);
    });
  }

  getMovie(id: string) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
      console.log(this.movie);
    });
  }

  getSimilarMovies(id: string) {
    this.moviesService.getSimilarMovies(id).subscribe((similarMovieData) => {
      this.similarMovies = similarMovieData;
    });
  }

  getMovieVideos(id: string) {
    this.moviesService.getMovieVideos(id).subscribe((movieVideoData) => {
      this.movieVideos = movieVideoData;
    });
  }

  getMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((moveImagesData) => {
      this.movieImages = moveImagesData;
    });
  }

  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((movieCreditData) => {
      this.movieCredits = movieCreditData;
    });
  }

  ngOnDestroy(): void {
    console.log('component Destroyed');
  }
}

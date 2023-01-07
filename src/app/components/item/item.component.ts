import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { IMAGE_SIZES } from 'src/app/constants/image-sizes';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;

  imageSizes = IMAGE_SIZES;

  constructor() {}

  ngOnInit(): void {}
}

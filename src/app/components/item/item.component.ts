import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { IMAGE_SIZES } from 'src/app/constants/image-sizes';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Item | null = null;

  imageSizes = IMAGE_SIZES;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss'],
})
export class ItemsBannerComponent {
  @Input() items: Movie[] = [];
  @Input() title: string = '';
}

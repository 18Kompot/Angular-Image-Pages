import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.css'],
})
export class DisplayCardsComponent implements OnInit {
  constructor(private imgService: ImagesService) {}

  @Input('images') imagesArr: Card[] = this.imgService.imagesArr;

  color = 'yellow';
  myStyle = { color: 'white', 'background-color': 'blue' };
  fontSize = '20';
  isBordered = true;

  ngOnInit(): void {
    // setTimeout(() => (this.myStyle['background-color'] = 'red'), 3000);
  }

  apply(color: string, size: string) {
    this.color = color;
    this.fontSize = size;
  }
}

import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor() {}

  imagesArr: Card[] = [];
  page: number = 1;

  removeImageById(id: string) {
    console.log(this.imagesArr);
    this.imagesArr = this.imagesArr.filter((image) => image.id !== id);
    console.log(this.imagesArr);
  }
}

import { NumberValueAccessor } from '@angular/forms';

export class Card {
  name: string;
  url: string;
  date: Date;
  likes: number;
  dislikes: number;
  id: string;
  constructor(name: string, url: string) {
    this.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    this.name = name;
    this.url = url;
    this.date = new Date();
    this.likes = 0;
    this.dislikes = 0;
  }

  setLikes(likes: number) {
    if (likes > 5) {
      this.likes = 5;
    } else {
      this.likes = likes;
    }
  }
}

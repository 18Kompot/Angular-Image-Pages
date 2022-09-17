import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Card } from '../models/card.model';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private http: HttpClient, private imgService: ImagesService) {}

  API_URL = '';
  imagesArr: Card[] = this.imgService.imagesArr;
  @ViewChild('url') url!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  isButtonDisabled = true;
  formData = { url: 'example.com', name: 'example' };
  // imgArr: any[] = [];

  ngOnInit(): void {
    // setTimeout(() => (this.name.nativeElement.value = 'nuu'), 3000);
    // setTimeout(() => (this.url.nativeElement.value = this.formData.url), 2000);
  }

  ngAfterViewInit(): void {}

  // addImage(name: HTMLInputElement, url: HTMLInputElement) {
  //   //   this.imgArr.push({
  //   //     download_url: url.value,
  //   //   });
  //   console.log(this.url.nativeElement.value);
  //   console.log(this.name.nativeElement.value);
  //   this.imagesArr.push(new Card(name.value, url.value));
  //   name.value = '';
  //   url.value = '';
  // }

  addImage(name: HTMLInputElement, url: HTMLInputElement) {
    this.imgService.imagesArr.push(
      new Card(this.formData.name, this.formData.url)
    );
    this.formData.name = '';
    this.formData.url = '';
  }

  onInput(): void {
    if (
      this.name.nativeElement.value.length >= 3 &&
      this.url.nativeElement.value.length >= 3
    ) {
      this.isButtonDisabled = false;
    } else {
      this.isButtonDisabled = true;
    }
  }

  addRandomImages() {
    this.API_URL = `https://picsum.photos/v2/list?page=${this.imgService.page}&limit=10`;
    this.http.get(this.API_URL).subscribe({
      next: (imagesArray: any) => {
        imagesArray.forEach((image: any) =>
          this.imgService.imagesArr.push(
            new Card(image.author, image.download_url)
          )
        );
        console.log(this.API_URL);
        console.log('page ' + this.imgService.page);
        this.imgService.page++;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  // post() {
  //   const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   this.http
  //     .post(
  //       'https://dummyjson.com/products/add',
  //       JSON.stringify({
  //         name: 'this.formData.name',
  //         url: 'this.formData.url',
  //         description: 'test',
  //       }),
  //       { headers: myHeaders }
  //     )
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }

  ngOnDestroy() {
    console.log('Destroyed');
  }
}

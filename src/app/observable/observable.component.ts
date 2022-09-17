import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  observable: any;
  constructor() {}

  ngOnInit(): void {
    this.setObservable();
    this.subscribeToObser();
  }

  subscribeToObser() {
    const sub1 = this.observable.subscribe((value: any) => {
      console.log(value);
    });
    setTimeout(() => {
      sub1.unsubscribe();
    }, 3000);
    (error: any) => console.log(error);
    const sub2 = this.observable.subscribe((value: any) => {
      console.log(value);
    });
    setTimeout(() => {
      sub2.unsubscribe();
    }, 10000);
  }
  setObservable() {
    this.observable = new Observable((observer) => {
      let i = 0;
      setInterval(() => {
        observer.next(i++);
      }, 1000);
      // if (i === 5) {
      //   observer.error(new Error('Invalid Number'));
      // }
      setTimeout(() => {
        observer.complete();
      }, 99000);
    });
  }
}

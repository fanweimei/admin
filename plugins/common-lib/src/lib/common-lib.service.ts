import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonLibModule } from './common-lib.module';
declare const window: any;

@Injectable({
  providedIn: 'any'
})
export class CommonLibService {
  change$ = new Subject<Array<any>>();
  constructor() {

  }
  _data: Array<number> = [];
  set data(v: Array<number>) {
    this._data = v;
    window['_data'] = v;
  }
  get data() {
    console.log(window)
    if (!this._data.length) {
      this._data = window['_data'] || [];
    }
    return this._data;
  }
}

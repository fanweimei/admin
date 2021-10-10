import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-sms',
  template: `
    <p>
      sms works!
    </p>
  `,
  styles: [
  ]
})
export class SmsComponent implements OnInit {
  static NAME = 'firsttest';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-common-lib',
  template: `
    <p>
      common works!
    </p>
  `,
  styles: [
  ]
})
export class CommonLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

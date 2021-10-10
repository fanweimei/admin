import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonLibService } from 'plugins/common-lib/src/public-api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  constructor(private commonService: CommonLibService) { }
  ngOnInit() {
    this.commonService.data = [4, 5, 6]
    console.log(this.commonService.data)
  }
}

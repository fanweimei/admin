import { Component, OnInit } from "@angular/core";
import { CommonLibService } from "plugins/common-lib/src/public-api";

@Component({
    template: `<div>hello this is message to you</div>`
})
export class MessageComponent implements OnInit {
    constructor(private commonService: CommonLibService) { }
    ngOnInit() {
        console.log(this.commonService.data);
    }
}
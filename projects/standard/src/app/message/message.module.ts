import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonLibModule } from "plugins/common-lib/src/public-api";
import { MessageComponent } from "./message.component";

@NgModule({
    declarations: [MessageComponent],
    imports: [
        RouterModule.forChild([{ path: '', component: MessageComponent }]),
        CommonLibModule
    ],
    exports: [RouterModule]
})
export class MessageModule { }
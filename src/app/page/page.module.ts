import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ComponentsModule} from "./components/components.module";
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [],
    imports: [
        BrowserModule,
        ComponentsModule,
        RouterOutlet,
    ],
  providers: [],
  exports: [
    ComponentsModule
  ],
  bootstrap: []
})
export class PageModule{

}

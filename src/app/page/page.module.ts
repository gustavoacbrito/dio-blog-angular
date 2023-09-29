import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenuBarComponent} from "./menu-bar/menu-bar.component";
import {MenuTitleComponent} from "./menu-title/menu-title.component";
import {BigCardComponent} from "./big-card/big-card.component";
import {SmallCardComponent} from "./small-card/small-card.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button"

@NgModule({
  declarations: [
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  exports: [
    BigCardComponent,
    MenuBarComponent,
    MenuTitleComponent,
    SmallCardComponent,
  ],
  bootstrap: []
})
export class PageModule{ }

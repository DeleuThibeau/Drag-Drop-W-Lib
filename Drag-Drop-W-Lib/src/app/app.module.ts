import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from "./app.component";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
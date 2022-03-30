import { Component, ElementRef, ViewChild } from "@angular/core";
import { CdkDragDrop, CdkDragEnter, CdkDragMove, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  drop(event: CdkDragDrop<any>) {
    this.items[event.previousContainer.data.index] = event.container.data.item;
    this.items[event.container.data.index] = event.previousContainer.data.item;
    moveItemInArray(this.items, event.container.data.item, event.previousContainer.data.item);
  } 

    public test(): void {
      console.log('CLICK')
    }
}

import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
})
export class ContextMenuComponent {
  public value: string = 'a simple value attached to the context menu';

  // The value can be typed
  public execute(text: string, value: any) {
    console.log(text, value);
  }
}

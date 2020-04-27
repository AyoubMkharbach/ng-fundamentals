import {Component, Input} from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template: `
      <div (click)="toggleContent()" class="well pointable">
          <ng-content select="[well-title]"></ng-content>
          <ng-content select="[well-body]" *ngIf="visible"></ng-content>
      </div>
  `
})
export class CollapsibleWellComponent {

  visible = false;

  toggleContent() {
    this.visible = !this.visible;
  }
}

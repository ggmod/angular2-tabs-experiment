import {Component, Input, CORE_DIRECTIVES, Inject, forwardRef} from 'angular2/angular2';
import {TabHeaders} from './tabHeaders';

@Component({
  selector: 'tab-header',
  template: `       
    <li class="tab-header" [class.active]="active">
      <a href="#" (click)="tabSelected()">
        <ng-content></ng-content>
      </a>
    </li>
  `,
  directives: [CORE_DIRECTIVES]
})
export class TabHeader {

  @Input() tabId: string;
  active = false;

  // @Parent has disappeared, @Host is a mystery
  constructor( @Inject(forwardRef(() => TabHeaders)) public parent: TabHeaders) {
    parent.selectedTabIdChange.toRx().subscribe(selectedTabId => {
      this.active = this.tabId === selectedTabId;
    });
  };

  tabSelected() {
    this.parent.selectedTabId = this.tabId;
  }
}
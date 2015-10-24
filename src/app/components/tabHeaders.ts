import {Component, Input, Output, EventEmitter, QueryList, ContentChildren, CORE_DIRECTIVES} from 'angular2/angular2';
import {TabHeader} from './tabHeader';


@Component({
  selector: 'tab-headers',
  template: `
    <div class="tab-headers">
      <ul class="nav nav-tabs" [class.nav-justified]="justified">
        <ng-content></ng-content>
      </ul>
    </div>`,
  directives: [CORE_DIRECTIVES],
  inputs: ['selectedTabId'] // I can't put @Input() on a getter/setter
})
export class TabHeaders {

  @Input() justified = false;

  @ContentChildren(TabHeader) headers: QueryList<TabHeader>;


  @Output() selectedTabIdChange = new EventEmitter();

  private _selectedTabId: string;

  get selectedTabId() {
    return this._selectedTabId;
  }

  set selectedTabId(newSelectedTabId: string) {
    this._selectedTabId = newSelectedTabId;
    this.selectedTabIdChange.next(newSelectedTabId);
  }

  afterContentInit() {
     // I have to refresh even if there was something selected initially, because the ContentChildren didn't exist back then
     this.selectedTabId = this.selectedTabId || this.headers.first.tabId;
  }

  // Replaced with Rx in TabHeader
  // private setActiveFlags(newSelectedTabId) {
  //   if (this.headers) {
  //     this.headers.toArray().forEach(header => { // for-of didn't work, and no forEach on QueryList
  //       header.active = header.tabId === newSelectedTabId;
  //     });
  //   }
  // }
}
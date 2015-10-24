import {Component, Input, ContentChildren, QueryList, CORE_DIRECTIVES} from 'angular2/angular2';
import {Tab} from './tab';


@Component({
  selector: 'tabs',
  template: `
    <div class="tabbable">
      <ul class="nav nav-tabs" [class.nav-justified]="justified">
        <li *ng-for="#tab of tabs" [class.active]="tab.active">
          <a href="#" (click)="selectTab(tab)" [inner-html]="tab.tabTitle">
            <!-- {{tab.tabTitle}} -->
          </a>
        </li>
      </ul>
      <div class="tab-content">
        <ng-content></ng-content>
      </div>
    </div>`,
  directives: [CORE_DIRECTIVES],
})
export class Tabs {

  @Input() justified = false;

  @ContentChildren(Tab) tabs: QueryList<Tab>;

  afterViewInit() {
    if (!this.tabs.toArray().some(tab => tab.active)) {
      this.tabs.first.active = true;
    }
  }

  selectTab(tab: Tab) {
    this.tabs.toArray().forEach(tab => {
      tab.active = false;
    });
    tab.active = true;
  }
}
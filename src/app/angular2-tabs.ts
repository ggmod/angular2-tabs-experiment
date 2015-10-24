import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {TabHeaders} from './components/tabHeaders';
import {TabHeader} from './components/tabHeader';
import {Tabs} from './components/tabs';
import {Tab} from './components/tab';


@Component({
  selector: 'angular2-tabs-app',
  templateUrl: 'app/angular2-tabs.html',
  directives: [CORE_DIRECTIVES, TabHeaders, TabHeader, Tabs, Tab]
})
export class Angular2TabsApp {

  constructor() {}

  tabsDemo1 = { 
    secondTabId: 'TAB2',
    otherTabName: 'Other Tab',
    selectedTabId: 'OTHER_TAB1'
  };

  tabsDemo2 = {
    tab2Title: 'Tab 2',
    tab3TitleHtml: 'Tab <b>3</b>'
  };
}

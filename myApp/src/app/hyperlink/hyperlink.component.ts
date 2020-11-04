import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
  selector: 'app-hyperlink',
  template: `<a [routerLink]="['/' + routeFragment, routeParams]">{{displayText}}</a>`  
})
export class HyperlinkComponent implements AgRendererComponent {

  displayText: string;
  routeFragment: string;
  routeParams = {};

  agInit(params: any): void {
    const rendererParams = params.rendererParams;
    this.displayText = params.data[rendererParams.textField];
    this.routeFragment = rendererParams.routeFragment;
    rendererParams.routeParams.forEach((value: { paramKey: string, dataField: string }) => {
      this.routeParams[value.paramKey] = params.data[value.dataField];
    });
  }

  refresh(params: any) {
    return false;
  }

}

import { Component } from '@angular/core';
import { Goal } from './goal';
import {PerfLogEventType} from '@angular/compiler-cli/src/ngtsc/perf/src/tracking';
import {getWorkspaceDetails} from '@angular/cli/utilities/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // goal = 'Watch Finding Nemo';
  // goals: string[];
  //
  // constructor() {
  //   this.goals = ['Watch finding Nemo', 'Buy cookies', 'Get new phone case'];
  // }

  // goals: Goal[] = [
  //   {id: 1, name: 'Watch finding Nemo'},
  //   {id: 2, name: 'Buy Cookies'},
  //   {id: 3, name: 'Get new Phone Case'},
  //   {id: 4, name: 'Get Dog Food'},
  //   {id: 6, name: 'Plot my world domination plan'},
  // ];
}

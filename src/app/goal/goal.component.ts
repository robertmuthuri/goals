import {Component, Input, OnInit} from '@angular/core';
import { Goal } from '../goal';
import {PerfLogEventType} from '@angular/compiler-cli/src/ngtsc/perf/src/tracking';
import {getWorkspaceDetails} from '@angular/cli/utilities/project';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2019, 3, 4)),
    new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date(2019, 6, 9)),
    new Goal(3, 'Get new Phone Case', 'Pupper likes expensive snacks', new Date(2019, 1, 2)),
    new Goal(4, 'Get Dog Food', 'Damn Math', new Date(2019, 0, 18)),
    new Goal(5, 'Solve math homework', 'Coz I am the real OG', new Date(2019, 2, 14)),
    new Goal(6, 'Plot my world domination plan', 'Find an online version and watch merlin find his son', new Date(2019, 3, 14)),
  ];

  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  // function to be triggered when the event is captured
  // completeGoal(isComplete, index) {
  //   if (isComplete) {
  //     this.goals.splice(index, 1);
  //   }
  // }

  // delete function to delete a goal
  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`);

      if (toDelete) {
        this.goals.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

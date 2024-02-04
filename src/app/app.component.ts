import {Component, OnInit} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {TeslaCarsService} from "./services/teslaCars.service";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {ModelSelected} from "./models/modelSelected";
import {DashBoardMenuComponent} from "./menu/dashboardmenu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterOutlet, RouterLink, RouterLinkActive, DashBoardMenuComponent],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  title = "tesla-configurator";
  constructor() {
  }

  ngOnInit(): void {
  }

}

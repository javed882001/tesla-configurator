import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {TeslaCarsService} from "../services/teslaCars.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './dashboardmenu.component.html',
  styleUrl: './dashboardmenu.component.scss'
})
export class DashBoardMenuComponent implements OnInit, OnDestroy {

  accessToStep2: boolean = false;
  accessToStep3: boolean = false;

  sub!: Subscription;

  constructor(private teslaCarsService: TeslaCarsService) {
  }

  ngOnInit() {
    this.sub = this.teslaCarsService.selectedModel.subscribe(res => {
      this.accessToStep2 = res.step1IsValid();
      this.accessToStep3 = res.step2IsValid();
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

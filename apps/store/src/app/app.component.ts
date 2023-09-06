import { Component, OnInit } from '@angular/core';
import { Emp, emps } from '@workspace/data';
import { EmpsService } from '@workspace/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'store';
  emps!: Observable<Emp[]>;

  constructor(private __empsService: EmpsService) {}

  ngOnInit(): void {
    this.emps = this.__empsService.getEmpsList();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminEmp } from '@workspace/data';
import { AdminsService } from '@workspace/services';
import { Observable, Subject, takeUntil } from 'rxjs';
import { EmpCardComponent } from '@workspace/common-ui';

@Component({
  selector: 'workspace-emps-list',
  standalone: true,
  imports: [CommonModule, EmpCardComponent],
  templateUrl: './emps-list.component.html',
  styleUrls: ['./emps-list.component.scss'],
})
export class EmpsListComponent implements OnInit, OnDestroy {
  private __unsubscriber: Subject<void> = new Subject();
  admins!: Observable<AdminEmp[]>;

  constructor(private __adminsService: AdminsService) {}

  ngOnInit(): void {
    this.admins = this.__adminsService.users;
    this.__adminsService
      .getAdmins()
      .pipe(takeUntil(this.__unsubscriber))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.__unsubscriber.next();
    this.__unsubscriber.complete();
  }

  deleteUser(user: AdminEmp): void {
    this.__adminsService
      .deleteAdmin(user)
      .pipe(takeUntil(this.__unsubscriber))
      .subscribe();
  }
}

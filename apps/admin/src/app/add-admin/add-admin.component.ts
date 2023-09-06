import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '@workspace/common-ui';
import { AdminsService } from '@workspace/services';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'workspace-add-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss'],
})
export class AddAdminComponent implements OnDestroy {
  form: FormGroup = this.__formBuild.group({
    name: ['', [Validators.required]],
    position: ['', [Validators.required]],
    accessLevel: ['', [Validators.required]],
  });
  private __unsubscriber: Subject<void> = new Subject();

  constructor(
    private __formBuild: FormBuilder,
    private __adminService: AdminsService
  ) {}

  submitForm(): void {
    this.__adminService
      .addAdmin(this.form.value)
      .pipe(takeUntil(this.__unsubscriber))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.__unsubscriber.next();
    this.__unsubscriber.complete();
  }
}

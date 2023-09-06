import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminEmp, Emp } from '@workspace/data';

@Component({
  selector: 'workspace-emp-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emp-card.component.html',
  styleUrls: ['./emp-card.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class EmpCardComponent {
  @HostBinding('class') class = 'p-5 flex flex-col';
  @Input({ required: true }) emp!: Emp | AdminEmp;

  isAdmin(): boolean {
    return 'accessLevel' in this.emp;
  }
}

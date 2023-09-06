import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@workspace/common-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'workspace-nav-bar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(private __router: Router) {}

  navigateToAdd(): void {
    this.__router.navigate(['/add-admin']);
  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminsService } from '@workspace/services';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  standalone: true,
  imports: [RouterModule, NavBarComponent, CommonModule, HttpClientModule],
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AdminsService],
})
export class AppComponent {
  title = 'admin';
}

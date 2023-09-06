import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'workspace-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input({ required: true }) label!: string;
  @Input() styleClass!: string;
  @Input() type: 'submit' | 'button' = 'button';
}

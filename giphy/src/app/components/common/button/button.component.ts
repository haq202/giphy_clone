import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { ButtonSeverityType, ButtonType } from '@core/models/layout.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  label = input<string>('');
  href = input<string>('');
  icon = input<string>('');
  severity = input<ButtonSeverityType>('primary');
  disabled = input<boolean>(false);
  type = input<ButtonType>('button');
  buttonClick = output<void>();
  rounded = input<boolean>(false);
  outlined = input<boolean>(false);
  link = input<boolean>(false);
  text = input<boolean>(false);
  styleClass = input<string>('');
  loading = input<boolean>(false);
  height = input<string>('unset');
  width = input<string>('unset');

  onClick(): void {
    this.buttonClick.emit();
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  standalone: true,
  imports: [],
  templateUrl: './entertainment.component.html',
  styleUrl: './entertainment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntertainmentComponent {}

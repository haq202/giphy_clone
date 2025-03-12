import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SportsComponent {}

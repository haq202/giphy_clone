import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reactions',
  standalone: true,
  imports: [],
  templateUrl: './reactions.component.html',
  styleUrl: './reactions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactionsComponent {}

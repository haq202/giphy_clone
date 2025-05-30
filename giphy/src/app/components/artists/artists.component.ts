import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtistsComponent {}

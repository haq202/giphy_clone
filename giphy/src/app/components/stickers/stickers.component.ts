import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stickers',
  standalone: true,
  imports: [],
  templateUrl: './stickers.component.html',
  styleUrl: './stickers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StickersComponent {}

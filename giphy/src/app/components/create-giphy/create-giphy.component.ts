import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-create-giphy',
  standalone: true,
  imports: [],
  templateUrl: './create-giphy.component.html',
  styleUrl: './create-giphy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateGiphyComponent {}

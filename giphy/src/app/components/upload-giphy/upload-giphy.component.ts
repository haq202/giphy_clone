import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-upload-giphy',
  standalone: true,
  imports: [],
  templateUrl: './upload-giphy.component.html',
  styleUrl: './upload-giphy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadGiphyComponent {}

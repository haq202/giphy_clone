import {
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { HeaderComponent } from './layouts/header/header.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { GifsService } from '@core/services/gifs/gifs.service';
import { take } from 'rxjs';
import { IGif } from '@core/models/common.model';
import { CommonModule } from '@angular/common';
import { NavbarType } from '@core/models/layout.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainLayoutComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [GifsService],
})
export class AppComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly gifsService = inject(GifsService);

  gifs = signal<IGif[]>([]);
  selectedGif = signal<IGif | null>(null);

  ngOnInit(): void {
    this.getGifs();
  }

  getGifs(
    data: { title: string; type: NavbarType | null } = {
      title: '',
      type: null,
    }
  ): void {
    this.gifsService
      .searchGifs(data)
      .pipe(take(1))
      .subscribe((res: IGif[]) => {
        this.gifs.set(res);
        this.cdr.markForCheck();
      });
  }

  onPreview(gif: IGif) {
    this.selectedGif.set(gif);
  }

  closePreview(): void {
    this.selectedGif.set(null);
  }
}

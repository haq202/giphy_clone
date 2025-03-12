import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from '@core/services/loader.service';
import { LoaderComponent } from './layouts/loader/loader.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoaderComponent,
    HeaderComponent,
    MainLayoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public isLoading = false;
  private readonly cdr = inject(ChangeDetectorRef);

  constructor(public readonly loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.loading$.subscribe(res => {
      this.isLoading = res;
      this.cdr.detectChanges();
    });
  }
}

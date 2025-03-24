import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ButtonComponent } from '../../components/common/button/button.component';
import { INavbarItem } from '@core/models/layout.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  placeholder = signal<string>('@username to search channels');

  navItems = signal<INavbarItem[]>([
    { label: 'Reactions', href: '/reactions' },
    { label: 'Entertainment', href: '/entertainment' },
    { label: 'Sports', href: '/sports' },
    { label: 'Stickers', href: '/stickers' },
    { label: 'Artists', href: '/artists' },
    { icon: 'pi pi-ellipsis-v', dropdown: [] },
  ]);

  private readonly router = inject(Router);

  constructor() {
    let toggle = true;
    setInterval(() => {
      this.placeholder.set(
        toggle
          ? 'Search all the GIFs and Stickers'
          : '@username to search channels'
      );
      toggle = !toggle;
    }, 3000);
  }

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { ButtonComponent } from '../../components/common/button/button.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { INavbarItem, NavbarType } from '@core/models/layout.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DialogService } from '../../components/common/dialog/dialog.service';
// import { UploadGiphyComponent } from '../../components/upload-giphy/upload-giphy.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService],
})
export class HeaderComponent implements OnInit {
  handleSearch = output<{ title: string; type: NavbarType | null }>({});

  placeholder = signal<string>('@username to search channels');

  navItems = signal<INavbarItem[]>([
    {
      label: 'Pochacco',
      value: 'POCHACCO',
    },
    {
      label: "Tonton's Friends",
      value: 'TONTON',
    },
    {
      label: 'Yeon The Land',
      value: 'YEON',
    },
    {
      label: 'Bee cute',
      value: 'BEE',
    },
    {
      label: 'Others',
      value: 'OTHERS',
    },
  ]);

  searchForm!: FormGroup;

  private readonly router = inject(Router);
  private readonly dialogService = inject(DialogService);

  constructor(private fb: FormBuilder) {
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

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: [''],
    });
  }

  onNavChanges(data: NavbarType) {
    this.handleSearch.emit({ title: '', type: data });
  }

  navigateTo(url: string): void {
    this.handleSearch.emit({ title: '', type: null });
    this.router.navigate([url]);
  }

  onSearch() {
    this.handleSearch.emit({
      title: this.searchForm.value.search,
      type: null,
    });
  }

  onOpenUploadDialog() {
    // this.dialogService
    //   .openDialog(UploadGiphyComponent, {
    //     title: 'Upload Giphy',
    //   })
    //   .subscribe((res: any) => {
    //     if (res?.isReload) {
    //       this.handleSearch.emit({ title: '', type: null });
    //     }
    //   });
  }
}

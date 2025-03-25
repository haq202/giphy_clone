import { Routes } from '@angular/router';
import { ArtistsComponent } from './components/artists/artists.component';
import { UploadGiphyComponent } from './components/upload-giphy/upload-giphy.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'artists',
    component: ArtistsComponent,
  },
  {
    path: 'upload',
    component: UploadGiphyComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then(m => m.AuthModule),
  },
];

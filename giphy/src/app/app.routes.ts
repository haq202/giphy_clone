import { Routes } from '@angular/router';
import { ReactionsComponent } from './components/reactions/reactions.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { SportsComponent } from './components/sports/sports.component';
import { StickersComponent } from './components/stickers/stickers.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { UploadGiphyComponent } from './components/upload-giphy/upload-giphy.component';
import { CreateGiphyComponent } from './components/create-giphy/create-giphy.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'reactions',
    component: ReactionsComponent,
  },
  {
    path: 'entertainment',
    component: EntertainmentComponent,
  },
  {
    path: 'sports',
    component: SportsComponent,
  },
  {
    path: 'stickers',
    component: StickersComponent,
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
    path: 'create',
    component: CreateGiphyComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then(m => m.AuthModule),
  },
];

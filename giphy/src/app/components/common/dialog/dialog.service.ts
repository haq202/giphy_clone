import { Injectable, Type } from '@angular/core';
import {
  DialogService as TheDialogService,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService extends TheDialogService {
  openDialog<C, D>(
    component: Type<C>,
    data: D,
    config?: DynamicDialogConfig
  ): Observable<unknown> {
    const dialogRef = this.open(component, {
      data,
      closable: false,
      showHeader: false,
      breakpoints: {
        '576px': '90vw',
      },
      ...config,
    });

    return dialogRef.onClose;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, delayWhen, map, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loadingSubject$ = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject$.asObservable().pipe(
    delayWhen(value => {
      if (value) {
        return of(value);
      }
      return timer(500).pipe(map(() => true));
    })
  );
  loadingItems$ = new BehaviorSubject<Record<string, boolean>>({});
  loadingAll$ = this.loadingItems$.asObservable();

  setLoading(isLoading: boolean) {
    this.loadingSubject$.next(isLoading);
  }

  setLoadingForItem(endpoint: string, isLoading: boolean) {
    const currentLoading = this.loadingItems$.getValue();
    currentLoading[endpoint] = isLoading;
    this.loadingItems$.next(currentLoading);
  }
}

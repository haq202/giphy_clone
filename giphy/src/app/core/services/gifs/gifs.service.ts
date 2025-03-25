import { Injectable } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { IGif } from '@core/models/common.model';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private dbPath = 'gifs';

  constructor(private fs: Firestore) {}

  searchGifs(keyword = '', limit = 12): Observable<any> {
    const gifsCollection = collection(this.fs, this.dbPath);
    return from(getDocs(gifsCollection)).pipe(
      map(snapshot =>
        snapshot.docs
          .map(doc => ({ id: doc.id, ...(doc.data() as IGif) }))
          .filter((gif: IGif) =>
            gif.title.toLowerCase().includes(keyword.toLowerCase())
          )
          .slice(0, limit)
      )
    );
  }
}

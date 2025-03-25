import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  Firestore,
  getDocs,
} from '@angular/fire/firestore';
import { IGif } from '@core/models/common.model';
import { NavbarType } from '@core/models/layout.model';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private dbPath = 'gifs';

  constructor(private fs: Firestore) {}

  searchGifs(
    data?: { title: string; type: NavbarType | null },
    limit = 12
  ): Observable<any> {
    const gifsCollection = collection(this.fs, this.dbPath);
    return from(getDocs(gifsCollection)).pipe(
      map(snapshot =>
        snapshot.docs
          .map(doc => ({ id: doc.id, ...(doc.data() as IGif) }))
          .filter(
            (gif: IGif) =>
              data &&
              gif.title.toLowerCase().includes(data.title.toLowerCase()) &&
              (data.type ? gif.type === data.type : true)
          )
          .slice(0, limit)
      )
    );
  }

  createGif(data: IGif): Observable<any> {
    const gifsCollection = collection(this.fs, this.dbPath);
    return from(addDoc(gifsCollection, data).then(() => data));
  }
}

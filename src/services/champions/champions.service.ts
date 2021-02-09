import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Champion } from 'types';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  private champions: any;

  championsSubject: Subject<any[]> = new Subject<any[]>();

  constructor(private db: AngularFirestore) {
    this.getAllChampions();
  }

  emitChampionsSubject() {
    this.championsSubject.next(this.champions.slice());
  }

  getUserById(id: number) {
    return this.champions.find((champion: Champion) => champion.id === id);
  }

  getAllChampions() {
    return this.db.collection('champions').snapshotChanges().pipe(
      map(changes => {
        return changes.map(doc => {
          return {
            id: doc.payload.doc.id,
            data: doc.payload.doc.data()
          };
        });
      })
    ).subscribe(res => {
      this.champions = res.map((champion: any) => ({ ...champion.data, id: champion.id }));
      this.emitChampionsSubject();
    });
  }

  add(champion: Champion) {
    return new Observable(obs => {
      this.db.collection('champions').add(champion).then(() => {
        console.log('success');
        obs.next();
      });
    });
  }

  update(champion: Champion) {
    return new Observable(obs => {
      this.db.doc(`champions/${champion.id}`).update(champion);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`champions/${id}`).delete();
  }
}

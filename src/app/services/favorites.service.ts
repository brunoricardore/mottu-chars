import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private _favoriteList: number[] = [];
  favoriteList$ = new BehaviorSubject<number[]>([]);

  get favorites$() {
    return this.favoriteList$.asObservable();
  }

  get currentList() {
    return this.favoriteList$.getValue();
  }

  get currentLength() {
    return this.currentList.length;
  }

  toggleFavorite(id: number) {
    const index = this._favoriteList.findIndex(i => i === id);
    if (index === -1) {
      this.addItem(id)
    } else {
      this.removeItem(index);
    }
  }

  addItem(id: number) {
    this._favoriteList.push(id);
    this.favoriteList$.next(this._favoriteList);
  }

  removeItem(index: number) {
    this._favoriteList.splice(index, 1);
    this.favoriteList$.next(this._favoriteList);
  }
}

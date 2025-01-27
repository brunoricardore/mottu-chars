import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Character } from '../models/api.models';
import { CharacterService } from './character.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private charService = inject(CharacterService);

  private _favoriteIDList: number[] = [];
  private _favoriteCharacters: Character[] = [];

  _favoriteIDList$ = new BehaviorSubject<number[]>([]);
  _favoriteCharacters$ = new BehaviorSubject<Character[]>([]);

  get favoriteIDList() {
    return this._favoriteIDList;
  }

  set favoriteIDList(data: number[]) {
    this._favoriteIDList = data;
    this._favoriteIDList$.next(this._favoriteIDList);
    if (this._favoriteIDList.length > 0) {
      this.fetchFavoritesData();
    } else {
      this.favoriteCharacters = [];
    }
  }

  get favoriteCharacters() {
    return this._favoriteCharacters;
  }

  set favoriteCharacters(data: Character[]) {
    this._favoriteCharacters = data;
    this._favoriteCharacters$.next(this._favoriteCharacters);
  }

  get favoriteCharacters$() {
    return this._favoriteCharacters$.asObservable();
  }

  get currentIDList() {
    return this._favoriteIDList$.getValue();
  }

  get currentLength() {
    return this.currentIDList.length;
  }

  toggleFavorite(id: number) {
    const index = this._favoriteIDList.findIndex(i => i === id);
    if (index === -1) {
      this.addItem(id)
    } else {
      this.removeItem(id);
    }
  }

  addItem(id: number) {
    const updatedList = [
      ...this._favoriteIDList,
      id
    ];
    this.favoriteIDList = updatedList;
  }

  removeItem(id: number) {
    const updatedList = this._favoriteIDList.filter(item => item !== id);
    this.favoriteIDList = updatedList;
  }

  fetchFavoritesData() {
    this.charService.fetchCharacterByIds(this._favoriteIDList)
      .pipe(take(1))
      .subscribe(data => {
        this.favoriteCharacters = data;
      })
  }
}

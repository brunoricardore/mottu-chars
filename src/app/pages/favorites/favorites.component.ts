import { Component, inject, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { CommonModule } from '@angular/common';
import { MessageBoxComponent } from '../../components/message-box/message-box.component';
import { RouterModule } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { finalize, Observable } from 'rxjs';
import { Character } from '../../models/api.models';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import { LoaderSpinnerComponent } from '../../components/loader-spinner/loader-spinner.component';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule, MessageBoxComponent, RouterModule, CharacterCardComponent, LoaderSpinnerComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit {

  loading = false;

  favService = inject(FavoritesService);
  characterService = inject(CharacterService);

  favorites$!: Observable<Character[]>;

  get favoritesLength() {
    return this.favService.currentLength;
  }

  get favorites() {
    return this.favService.currentList;
  }

  ngOnInit(): void {
    if (this.favoritesLength > 0) {
      this.loading = true;
      this.getFavorites();
    }
  }

  getFavorites() {
    this.favService.favoriteList$.subscribe(list => {
      this.favorites$ = this.characterService.fetchCharacterByIds(list)
        .pipe(
          finalize(() => {
            this.loading = false;
          })
        )
    })
  }

}

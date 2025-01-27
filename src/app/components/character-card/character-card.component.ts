import { Component, inject, input } from '@angular/core';
import { Character } from '../../models/api.models';
import { FavoritesService } from '../../services/favorites.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-card',
  imports: [CommonModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent {
  character = input<Character>();
  favoriteService = inject(FavoritesService)

  toggleFavorite(id: number) {
    this.favoriteService.toggleFavorite(id);
  }

  get isFavorite() {
    if (!this.character()) return false;
    return this.favoriteService.currentIDList.includes(this.character()?.id!);
  }

}

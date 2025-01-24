import { Component, inject } from '@angular/core';
import { BadgeComponent } from "../badge/badge.component";
import { FavoritesService } from '../../services/favorites.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  imports: [BadgeComponent, RouterModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  favoriteService = inject(FavoritesService);

  get totalOfFavorites() {    
    return this.favoriteService.currentLength;
  }
}

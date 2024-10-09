import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import materialModules from '../../../../shared/modules/angular-material-modules';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    CommonModule,
    materialModules
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent { }

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import materialModules from '../../modules/angular-material-modules';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    materialModules
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent { }

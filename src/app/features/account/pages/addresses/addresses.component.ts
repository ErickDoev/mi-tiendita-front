import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import materialModules from '../../../../shared/modules/angular-material-modules';

@Component({
  selector: 'app-addresses',
  standalone: true,
  imports: [
    CommonModule,
    materialModules
  ],
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressesComponent { }

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import materialModules from '../../../../shared/modules/angular-material-modules';
import { Router } from '@angular/router';

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
export class AddressesComponent {

  router = inject(Router);

  onRedirect(url: string): void {
    this.router.navigate([url]);
  }
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { FormBuilder, Validators } from '@angular/forms';
import materialModules from '../../../../shared/modules/angular-material-modules';
import { Gender } from '../../interfaces/gender';

@Component({
  selector: 'app-edit-address',
  standalone: true,
  imports: [
    CommonModule,
    materialModules
  ],
  templateUrl: './edit-address.component.html',
  styleUrl: './edit-address.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditAddressComponent {

  private readonly accountService = inject(AccountService);
  private readonly fb = inject(FormBuilder);

  genders = signal<Gender[]>([]);

  form = this.fb.group({
    name: ['', [Validators.required]],
    firstLastName: ['', [Validators.required]],
    secondLastname: ['', [Validators.required]],
    address: ['', [Validators.required]],
    addressExtra: ['', [Validators.required]],
    country: ['', [Validators.required]],
    state: ['', [Validators.required]],
    city: ['', [Validators.required]],
    cp: ['erick@.com', [Validators.required]],
    addressPhone: ['', [Validators.required]],
    isDefault:[false]
  });

}

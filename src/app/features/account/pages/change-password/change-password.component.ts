import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import materialModules from '../../../../shared/modules/angular-material-modules';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    CommonModule,
    materialModules
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePasswordComponent {
  fb = inject(FormBuilder);
  form = this.fb.group({
    newPassword: ['',[Validators.required]],
    confirmPassword: ['',[Validators.required]]
  });
 }

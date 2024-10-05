import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatError
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {

  router = inject(Router);
  fb = inject(FormBuilder);
  authService = inject(AuthService);

  form = this.fb.group({
    email: ['erick.doev@gmail.com', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['P@lom@lun@1234', [Validators.required]]
  });

  onRedirect():void {
    this.router.navigate(['auth/signin']);
  }

  onSubmit():void {
    console.log(this.form.value);

    if(this.form.invalid) return;
    const payload = {
      email: this.form.controls.email.value,
      password: this.form.controls.password.value
    };
    this.authService.login(payload).subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (error) => {
        console.log(error);

      }
    });
  }

 }

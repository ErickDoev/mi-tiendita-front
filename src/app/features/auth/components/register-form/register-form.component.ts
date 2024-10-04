import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatError
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent implements OnInit{
    router = inject(Router);
  fb = inject(FormBuilder);
  form = this.fb.group({
    name: ['', [Validators.required]],
    firstLastName: ['', [Validators.required]],
    secondLastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['',[Validators.required]]
  });

  ngOnInit(): void {
    this.validateTextField('name');
    this.validateTextField('firstLastName');
    this.validateTextField('secondLastName');
  }

  onRedirect():void {
    this.router.navigate(['auth/login']);
  }

  validateTextField(controlName: string): void {
    let expressionText = /^[a-zA-ZÁáÉéÍíÓóÚúÑñÄËÖÜäëöü\s]+$/;
    const control = this.form.get(controlName);
    control?.valueChanges.subscribe((val: string) => {
      if(val.length > 1) {
        if (!expressionText.test(control.value || '')) {
          control.setValue(control.value.match(/([a-zA-ZÁáÉéÍíÓóÚúÑñÄËÖÜäëöü\s])/g)?.join(''));
        }
      }
    });
  }

 }

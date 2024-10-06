import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import materialModules from '../../../../shared/modules/angular-material-modules';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { Gender } from '../../interfaces/gender';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    materialModules
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {

  private readonly accountService = inject(AccountService);
  private readonly fb = inject(FormBuilder);

  genders = signal<Gender[]>([]);

  form = this.fb.group({
    name: ['Erick', [Validators.required]],
    firstLastName: ['Cruz', [Validators.required]],
    secondLastname: ['Padilla', [Validators.required]],
    birthday: ['19/11/1997', [Validators.required]],
    gender: ['Male', [Validators.required]],
    email: ['erick@gmail.com', [Validators.required]],
    phoneNumber: ['2461761082', [Validators.required]],
    acceptMarketing: [false]
  });

  ngOnInit(): void {
    this.getGender();
  }

  getGender(): void {
    this.accountService.getUserGenders().subscribe({
      next: (genders) => {
        this.genders.set(genders);
        this.getProfile();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getProfile(): void {
    this.accountService.getProfile().subscribe({
      next: (resp) => {
        console.log(resp);

        this.form.patchValue({
          name: resp.user_name,
          firstLastName: resp.first_last_name,
          secondLastname: resp.second_last_name,
          birthday: resp.birthday,
          email: resp.email,
          phoneNumber: resp.phone_number,
          gender: resp.gender.gender_id,
          acceptMarketing: resp.acceptMarketing
        });
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onSubmit(): void {
    if(this.form.invalid) return;
    console.log(this.form.value);
  }

 }

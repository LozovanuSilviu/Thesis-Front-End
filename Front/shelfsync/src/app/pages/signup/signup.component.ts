import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface SignupForm {
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignUpComponent {
  signupForm!: FormGroup<{
    password: FormControl<string | null>;
    name: FormControl<string | null>;
    idnp: FormControl<string | null>;
    email: FormControl<string | null>
  }>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ){
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      idnp: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit(){
    this.loginService.signup(this.signupForm.value.name!, this.signupForm.value.email!, this.signupForm.value.password!, this.signupForm.value.idnp!).subscribe({
      next: () =>  {
      this.toastService.success("Successfully created account")
        this.router.navigate(["login"])
      },
      error: () => this.toastService.error("Something went wrong")
    })
  }

  navigate(){
    this.router.navigate(["login"])
  }
}

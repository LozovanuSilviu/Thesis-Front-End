import {Component, OnInit} from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import {Router} from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup<LoginForm>;
  userId : string|null = null;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ){
    this.loginForm = new FormGroup({
      // email: new FormControl('', [Validators.required, Validators.email]),
      email: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    })
  }

       submit() {
       this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
         .subscribe({
             next: () =>{
               this.toastService.success("Successfully logged in");
               this.router.navigate(["workbench"])
             } ,
             error: () => this.toastService.error("Something went wrong")
           }
         );
    }

  navigate(){
    this.router.navigate(["signup"])
  }

  ngOnInit(): void {

  }
}

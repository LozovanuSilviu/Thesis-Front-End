import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { WorkbenchComponent } from './components/workbench/workbench.component';
import {BooksComponent} from "./pages/books/books.component";
import {AllReservationsComponent} from "./pages/reservations/all-reservations/all-reservations.component";
import {UsersComponent} from "./pages/users/users.component";
import {UserReservationsComponent} from "./pages/reservations/user-reservations/user-reservations.component";
import {UserRentingsComponent} from "./pages/rentings/user-rentings/user-rentings.component";
import {AllRentingsComponent} from "./pages/rentings/all-rentings/all-rentings.component";
import {UserComponent} from "./pages/user/user.component";

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignUpComponent
    },
    {
        path: "workbench",
        component: WorkbenchComponent,
      children : [
        {
          path: "books",
          component: BooksComponent,
        },
        {
          path: "all-reservations",
          component: AllReservationsComponent,
        },
        {
          path: "user-reservations",
          component: UserReservationsComponent,
        },
        {
          path: "user-rentings",
          component: UserRentingsComponent,
        },
        {
          path: "all-rentings",
          component: AllRentingsComponent,
        },
        {
          path: "users",
          component: UsersComponent,
        },
        {
          path: "user/:userId",
          component: UserComponent,
        },
        {
          path: "",
          component: BooksComponent,
        },
      ]
    },
   {
     path: "",
     component: LoginComponent
   }
];

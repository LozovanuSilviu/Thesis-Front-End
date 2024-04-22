import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { WorkbenchComponent } from './components/workbench/workbench.component';
import {BooksComponent} from "./pages/books/books.component";
import {ReservationsComponent} from "./pages/reservations/reservations.component";

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
          path: "reservations",
          component: ReservationsComponent,
        },
        {
          path: "Users",
          component: ReservationsComponent,
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

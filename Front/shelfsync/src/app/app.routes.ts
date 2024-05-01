import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { WorkbenchComponent } from './components/workbench/workbench.component';
import {BooksComponent} from "./pages/books/book/books.component";
import {AllReservationsComponent} from "./pages/reservations/all-reservations/all-reservations.component";
import {UsersComponent} from "./pages/users/users.component";
import {UserReservationsComponent} from "./pages/reservations/user-reservations/user-reservations.component";
import {UserRentingsComponent} from "./pages/rentings/user-rentings/user-rentings.component";
import {AllRentingsComponent} from "./pages/rentings/all-rentings/all-rentings.component";
import {UserComponent} from "./pages/user/user.component";
import {EditBookComponent} from "./pages/books/edit-book-component/edit-book.component";
import {NewBookComponent} from "./pages/books/new-book/new-book.component";
import {DeleteBookComponent} from "./pages/books/delete-book/delete-book.component";
import {AddReservationBasedRentComponent} from "./pages/reservations/add-reservation-based-rent/add-reservation-based-rent.component";
import {AddReservationComponent} from "./pages/reservations/add-reservation/add-reservation.component";
import {DeleteReservationComponent} from "./pages/reservations/cancel-reservation/delete-reservation.component";
import {ReturnBookComponent} from "./pages/rentings/return-book/return-book.component";
import {AddBookRentingComponent} from "./pages/rentings/add-book-renting/add-book-renting.component";

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
          path: "books/add-reservation/:bookId",
          component: AddReservationComponent,
        },
        {
          path: "books/new-book",
          component: NewBookComponent,
        },
        {
          path: "books/edit/:bookId",
          component: EditBookComponent
        },
        {
          path: "books/delete/:bookId",
          component: DeleteBookComponent
        },
        {
          path: "books/add-rent/:bookId",
          component: AddBookRentingComponent
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
          path: "user-reservations/delete/:reservationId",
          component: DeleteReservationComponent,
        },
        {
          path: "user-rentings",
          component: UserRentingsComponent,
        },
        {
          path: "all-rentings/return-rent/:leaseId",
          component: ReturnBookComponent,
        },
        {
          path: "all-rentings",
          component: AllRentingsComponent,
        },
        {
          path: "all-reservations/add-rent/:rentId",
          component: AddReservationBasedRentComponent,
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

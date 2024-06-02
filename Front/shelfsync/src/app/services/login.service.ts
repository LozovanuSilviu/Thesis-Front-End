  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';
  import {UserTypes} from "../../Enums/UserTypes";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:7777/api/identity"

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/login", { username, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("userId", value.userId)
        sessionStorage.setItem("username", value.userName)
        sessionStorage.setItem("userType", UserTypes[value.userType])
        if (value.libraryId !== null){
          sessionStorage.setItem("libraryId", value.libraryId)
        }
      })
    )
  }

  signup(userName: string, email: string, password: string, idnp : string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/signUp", { userName, email, password , idnp})
  }
}

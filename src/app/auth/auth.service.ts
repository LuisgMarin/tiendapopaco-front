import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, ignoreElements, map, Observable, tap } from 'rxjs';
import { LoginCredentials } from './model';
import { UserWithToken } from './model/user.interface';
import { LoginResponse } from './model/login-response';
import { Rol } from './model/roles.type';
import { Registration } from './model/registration.interface';

const USER_LOCAL_STORAGE_KEY = 'userData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private urlEndPoint: string = 'http://localhost:8081';
  private user = new BehaviorSubject<UserWithToken | null>(null);
  user$ = this.user.asObservable();
  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(Boolean));

  constructor(private httpClient: HttpClient, private router: Router) {
    this.loadUserFromLocalStorage();
  }

  login(credentials: LoginCredentials): Observable<never> {
    return this.httpClient
      .post<LoginResponse>(`${this.urlEndPoint}/login`, credentials, {
        headers: this.httpHeaders,
      })
      .pipe(
        tap((response) => this.saveTokenToLocalStore(response)),
        tap((response) => this.pushNewUser(response)),
        tap(() => this.redirectToHome()),
        ignoreElements()
      );
  }

  registration(registration: Registration): Observable<never> {
    return this.httpClient
      .post<LoginResponse>(`${this.urlEndPoint}/register`, registration, {
        headers: this.httpHeaders,
      })
      .pipe(
        tap((response) => this.pushNewUser(response)),
        ignoreElements()
      );
  }

  logout(): void {
    this.removeUserFromLocalStorage();
    this.user.next(null);
    this.router.navigateByUrl('/login');
  }

  private redirectToHome(): void {
    this.router.navigateByUrl('/home');
  }

  private pushNewUser(response: LoginResponse) {
    this.user.next({
      usuario: response.usuario,
      rol: response.rol as Rol,
      token: response.token,
    });
  }

  private loadUserFromLocalStorage(): void {
    const userFromLocal = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

    if (userFromLocal) {
      const response: LoginResponse = JSON.parse(userFromLocal);
      this.pushNewUser(response);
    }
  }

  private saveTokenToLocalStore(response: LoginResponse): void {
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response));
  }

  private removeUserFromLocalStorage(): void {
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
  }
}

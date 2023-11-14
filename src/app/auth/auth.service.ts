import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, ignoreElements, map, Observable, tap } from 'rxjs';
import { LoginCredentials } from './model';
import { User, UserWithToken } from './model/user.interface';

const USER_LOCAL_STORAGE_KEY = 'userData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  private urlEndPoint: string = 'http://localhost:8081';
  private user = new BehaviorSubject<UserWithToken | null>(null);
  user$ = this.user.asObservable();
  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(Boolean));

  constructor(private httpClient: HttpClient, private router: Router) {
    this.loadUserFromLocalStorage();
  }

  login(credentials: LoginCredentials): Observable<never> {
    return this.httpClient.post<string>(`${this.urlEndPoint}/login`, credentials, {headers: this.httpHeaders}).pipe(
      tap((userToken) => this.saveTokenToLocalStore(userToken)),
      tap((userToken) => this.pushNewUser(userToken)),
      tap(() => this.redirectToHome()),
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

  private pushNewUser(token: string) {
    this.user.next(this.decodeToken(token));
  }

  private decodeToken(userToken: string): UserWithToken {
    const userInfo = JSON.parse(window.atob(userToken)) as User;

    return { ...userInfo, token: userToken };
  }

  private loadUserFromLocalStorage(): void {
    const userFromLocal = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

    userFromLocal && this.pushNewUser(userFromLocal);
  }
  private saveTokenToLocalStore(userToken: string): void {
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, userToken);
  }

  private removeUserFromLocalStorage(): void {
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
  }
}
